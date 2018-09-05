import { Component, OnInit } from '@angular/core';

import { EmployeesResult } from '../../../shared/_model/employees-result.model';
import { EmployeeService } from './../../_services/employee.service';
import { AlertifyService } from '../../../shared/_services/alertify.service';

@Component({
  selector: 'indeavor-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    employeesResult: EmployeesResult;

    constructor(private employeeService: EmployeeService, private alertify: AlertifyService) {}

    ngOnInit() {
        this.loadEmployees();
    }

    loadEmployees() {
        this.employeeService.getEmployees().subscribe((employeesResult: EmployeesResult) => {
            this.employeesResult = employeesResult;
        }, error => {
          this.alertify.error(error);
        });
    }

    onEmployeeDeletion(id: number) {
      this.alertify.confirm('Are you sure you want to delete this employee?', () => {
        this.employeeService.deleteEmployee(id).subscribe(() => {
          this.alertify.success('Employee was deleted successfully');
        }, error => {
          this.alertify.error(error);
        }, () => {
          this.loadEmployees();
        });
      }, () => {});
    }
}
