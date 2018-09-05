import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Department } from '../../../shared/_model/department.model';

@Component({
  selector: 'indeavor-departments-selector',
  templateUrl: './departments-selector.component.html',
  styleUrls: ['./departments-selector.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: DepartmentsSelectorComponent, multi: true }
  ]
})
export class DepartmentsSelectorComponent implements OnInit, ControlValueAccessor {

  @Input() departments: Department[];
  @Input() selectedDepartmentId = 0;
  @Output() departmentSelected = new EventEmitter<number>();

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnInit() {}

  writeValue(value: number ) {
    if (value) {
      this.selectedDepartmentId = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  selectDepartment() {
    this.departmentSelected.emit(this.selectedDepartmentId);
  }
}
