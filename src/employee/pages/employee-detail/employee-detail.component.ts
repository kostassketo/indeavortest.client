import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from './../../_services/employee.service';
import { AlertifyService } from '../../../shared/_services/alertify.service';

import { EmployeeResult } from '../../../shared/_model/employee-result.model';

@Component({
  selector: 'indeavor-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employeeResult: EmployeeResult;
  gender: string;

  constructor(
              private employeeService: EmployeeService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadEmployee();
  }

  loadEmployee() {
    this.employeeService.getEmployee(+this.route.snapshot.params['id']).subscribe((employeeResult: EmployeeResult) => {
      this.employeeResult = employeeResult;
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.gender = this.employeeResult.employee.gender === 'male' ? 'man' : 'woman';
    });
  }
}
