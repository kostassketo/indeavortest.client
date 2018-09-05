import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { DepartmentsSelectorComponent } from '../core/components/departments-selector/departments-selector.component';
import { DepartmentService } from '../department/_services/department.service';
import { EmployeeService } from './_services/employee.service';

@NgModule({
  declarations: [
    EmployeeDetailComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent,
    DepartmentsSelectorComponent
  ],
  imports: [
    BrowserModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    DepartmentService,
    EmployeeService
  ]
})
export class EmployeeModule { }
