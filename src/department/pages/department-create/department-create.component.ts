import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Department } from '../../../shared/_model/department.model';
import { DepartmentService } from '../../_services/department.service';
import { AlertifyService } from '../../../shared/_services/alertify.service';

@Component({
  selector: 'indeavor-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {

  department: Department;
  createDepartmentForm: FormGroup;

  constructor(
              private departmentService: DepartmentService,
              private alertify: AlertifyService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.buildCreateDepartmentForm();
  }

  createEmployee() {
    if (!this.createDepartmentForm.valid) {
      return;
    }
    this.department = Object.assign({}, this.createDepartmentForm.value);
    this.departmentService.createDepartment(this.department).subscribe(() => {
      this.alertify.success('Department was created successfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/']);
    });
  }

  private buildCreateDepartmentForm() {
    this.createDepartmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      code: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }
}
