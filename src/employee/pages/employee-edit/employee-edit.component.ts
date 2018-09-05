import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { EmployeeService } from './../../_services/employee.service';
import { AlertifyService } from '../../../shared/_services/alertify.service';
import { DepartmentService } from '../../../department/_services/department.service';

import { EmployeeResult } from '../../../shared/_model/employee-result.model';
import { Employee } from '../../../shared/_model/employee.model';
import { DepartmentsResult } from '../../../shared/_model/departments-result.model';
import { DepartmentResult } from '../../../shared/_model/department-result.model';

@Component({
  selector: 'indeavor-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employeeResult: EmployeeResult;
  departmentsResult: DepartmentsResult;
  departmentResult = { department: { id: 0, name: '', code: '' } };
  selectedDepartmentId: number;
  gender: string;
  editEmployeeForm: FormGroup;
  bsDatepickerConfig: Partial<BsDatepickerConfig>;

  constructor(
              private employeeService: EmployeeService,
              private departmentService: DepartmentService,
              private alertify: AlertifyService,
              private fb: FormBuilder,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadEmployee();
    this.buildEditEmployeeForm();
    this.loadDepartments();
  }

  updateEmployee() {
    this.employeeResult.employee = Object.assign({}, this.editEmployeeForm.value);
    this.employeeResult.employee.departmentId = this.selectedDepartmentId;
    this.employeeService.updateEmployee(this.employeeResult.employee).subscribe(() => {
      this.alertify.success('Profile was updated successfully!');
      this.editEmployeeForm.reset(this.employeeResult.employee);
    }, error => {
      this.alertify.error(error);
    });
  }

  onDepartmentSelected(id: number) {
    this.departmentService.getDepartment(id).subscribe((departmentResult: DepartmentResult) => {
      this.departmentResult = departmentResult;
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.selectedDepartmentId = this.departmentResult.department.id;
      this.employeeResult.employee.departmentId = this.departmentResult.department.id;
      this.editEmployeeForm.controls['selectedDepartment'].markAsDirty();
    });
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe((departmentsResult: DepartmentsResult) => {
      this.departmentsResult = departmentsResult;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadEmployee() {
    this.employeeService.getEmployee(+this.route.snapshot.params['id']).subscribe((employeeResult: EmployeeResult) => {
      this.employeeResult = employeeResult;
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.loadFormValues(this.employeeResult.employee);
      this.gender = this.employeeResult.employee.gender === 'male' ? 'man' : 'woman';
      if (this.employeeResult.employee.department) {
        this.departmentResult.department = this.employeeResult.employee.department;
        this.selectedDepartmentId = this.departmentResult.department.id;
      }
    });
  }

  private loadFormValues(employee: Employee) {
    this.editEmployeeForm.controls['title'].setValue(employee.title);
    this.editEmployeeForm.controls['firstName'].setValue(employee.firstName);
    this.editEmployeeForm.controls['lastName'].setValue(employee.lastName);
    this.editEmployeeForm.controls['email'].setValue(employee.email);
    this.editEmployeeForm.controls['role'].setValue(employee.role);
    this.editEmployeeForm.controls['dateOfBirth'].setValue(new Date(employee.dateOfBirth));
    this.editEmployeeForm.controls['eNumber'].setValue(employee.eNumber);
    this.editEmployeeForm.controls['gender'].setValue(employee.gender);
    if (this.selectedDepartmentId) {
      this.editEmployeeForm.controls['selectedDepartment'].setValue(this.selectedDepartmentId);
    }
  }

  private buildEditEmployeeForm() {
    this.editEmployeeForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(10)]],
      firstName: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
      role: ['', [Validators.required, Validators.maxLength(50)]],
      dateOfBirth: ['', Validators.required],
      eNumber: ['', [Validators.required, Validators.maxLength(100)]],
      gender: [0],
      selectedDepartment: [0]
    });
  }
}
