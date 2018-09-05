import { Component, OnInit } from '@angular/core';

import { DepartmentsResult } from '../../../shared/_model/departments-result.model';
import { DepartmentService } from './../../_services/department.service';
import { AlertifyService } from '../../../shared/_services/alertify.service';

@Component({
  selector: 'indeavor-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

    departmentsResult: DepartmentsResult;

    constructor(private departmentService: DepartmentService, private alertify: AlertifyService) {}

    ngOnInit() {
        this.loadDepartments();
    }

    loadDepartments() {
        this.departmentService.getDepartments().subscribe((departmentsResult: DepartmentsResult) => {
            this.departmentsResult = departmentsResult;
        }, error => {
          this.alertify.error(error);
        });
    }

    onDepartmentDeletion(id: number) {
      this.alertify.confirm('Are you sure you want to delete this department?', () => {
        this.departmentService.deleteDepartment(id).subscribe(() => {
          this.alertify.success('Department was deleted successfully');
        }, error => {
          this.alertify.error(error);
        }, () => {
          this.loadDepartments();
        });
      }, () => {});
    }
}
