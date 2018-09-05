import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DepartmentService } from '../../_services/department.service';
import { AlertifyService } from '../../../shared/_services/alertify.service';
import { DepartmentResult } from '../../../shared/_model/department-result.model';

@Component({
  selector: 'indeavor-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  departmentResult: DepartmentResult;

  constructor(
              private departmentService: DepartmentService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadDepartment();
  }

  loadDepartment() {
    this.departmentService.getDepartment(+this.route.snapshot.params['id']).subscribe((departmentResult: DepartmentResult) => {
      this.departmentResult = departmentResult;
    }, error => {
      this.alertify.error(error);
    });
  }
}
