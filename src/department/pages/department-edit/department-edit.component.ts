import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DepartmentService } from '../../_services/department.service';
import { AlertifyService } from '../../../shared/_services/alertify.service';

import { ActivatedRoute } from '@angular/router';
import { Department } from '../../../shared/_model/department.model';
import { DepartmentResult } from '../../../shared/_model/department-result.model';

@Component({
  selector: 'indeavor-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  editDepartmentForm: FormGroup;
  departmentResult: DepartmentResult;

  constructor(
              private departmentService: DepartmentService,
              private alertify: AlertifyService,
              private fb: FormBuilder,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadDepartment();
    this.buildEditDepartmentForm();
  }

  updateDepartment() {
    this.departmentResult.department = Object.assign({}, this.editDepartmentForm.value);
    this.departmentResult.department.id = +this.route.snapshot.params['id'];
    this.departmentService.updateDepartment(this.departmentResult.department).subscribe(() => {
      this.alertify.success('Details were updated successfully!');
      this.editDepartmentForm.reset(this.departmentResult.department);
    }, error => {
      this.alertify.error(error);
    });
  }

  loadDepartment() {
    this.departmentService.getDepartment(+this.route.snapshot.params['id']).subscribe((departmentResult: DepartmentResult) => {
      this.departmentResult = departmentResult;
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.loadFormValues(this.departmentResult.department);
    });
  }

  private loadFormValues(department: Department) {
    this.editDepartmentForm.controls['code'].setValue(department.code);
    this.editDepartmentForm.controls['name'].setValue(department.name);
  }

  private buildEditDepartmentForm() {
    this.editDepartmentForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

}
