import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../../shared/_model/employee.model';

@Component({
  selector: 'indeavor-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {

  @Input() employee: Employee;
  @Output() employeeDeleted = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  deleteEmployee(id: number) {
    this.employeeDeleted.emit(id);
  }
}
