import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { AlertifyService } from './../../../shared/_services/alertify.service';
import { EmployeeService } from './../../_services/employee.service';
import { DepartmentService } from '../../../department/_services/department.service';

import { Employee } from './../../../shared/_model/employee.model';
import { DepartmentResult } from './../../../shared/_model/department-result.model';
import { DepartmentsResult } from './../../../shared/_model/departments-result.model';

@Component({
  selector: 'indeavor-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee;
  departmentsResult: DepartmentsResult;
  departmentResult = { department: { id: 0, name: '', code: '' } };
  selectedDepartmentId: number;
  createEmployeeForm: FormGroup;
  bsDatepickerConfig: Partial<BsDatepickerConfig>;

  constructor(
              private employeeService: EmployeeService,
              private departmentService: DepartmentService,
              private alertify: AlertifyService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.bsDatepickerConfig = {
      containerClass: 'theme-blue'
    };
    this.departmentService.getDepartments().subscribe((departmentsResult: DepartmentsResult) => {
      this.departmentsResult = departmentsResult;
    }, error => {
      this.alertify.error(error);
    });
    this.buildCreateEmployeeForm();
  }

  createEmployee() {
    if (!this.createEmployeeForm.valid) {
      if (this.createEmployeeForm.errors) {
        this.alertify.error(this.createEmployeeForm.errors.toString());
      }

      return;
    }
    this.employee = Object.assign({}, this.createEmployeeForm.value);
    this.employee.departmentId = this.selectedDepartmentId;
    this.employeeService.createEmployee(this.employee).subscribe(() => {
      this.alertify.success('Employee was created successfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/']);
    });
  }

  onDepartmentSelected(id: number) {
    this.departmentService.getDepartment(id).subscribe((departmentResult: DepartmentResult) => {
      this.departmentResult = departmentResult;
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.selectedDepartmentId = this.departmentResult.department.id;
    });
  }

  private buildCreateEmployeeForm() {
    this.createEmployeeForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(10)]],
      firstName: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
      role: ['', [Validators.required, Validators.maxLength(50)]],
      dateOfBirth: [null, Validators.required],
      eNumber: ['', [Validators.required, Validators.maxLength(100)]],
      gender: [1],
      selectedDepartment: [0],
    });
  }
}

