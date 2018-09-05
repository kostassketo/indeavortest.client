import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Department } from '../../../shared/_model/department.model';

@Component({
  selector: 'indeavor-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.css']
})
export class DepartmentItemComponent implements OnInit {

  @Input() department: Department;
  @Output() departmentDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteDepartment(id: number) {
    this.departmentDeleted.emit(id);
  }
}
