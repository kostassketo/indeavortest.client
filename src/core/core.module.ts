import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core.routes';
import { DepartmentModule } from '../department/department.module';
import { EmployeeModule } from '../employee/employee.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlertifyService } from './../shared/_services/alertify.service';
import { EmployeeService } from '../employee/_services/employee.service';
import { DepartmentService } from './../department/_services/department.service';

import { PageNotFoundComponent } from './../core/pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './../core/pages/dashboard/dashboard.component';
import { EmployeeListComponent } from './../employee/components/employee-list/employee-list.component';
import { EmployeeItemComponent } from './../employee/components/employee-item/employee-item.component';
import { DepartmentListComponent } from './../department/components/department-list/department-list.component';
import { DepartmentItemComponent } from './../department/components/department-item/department-item.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    DashboardComponent,
    DepartmentItemComponent,
    DepartmentListComponent,
    EmployeeItemComponent,
    EmployeeListComponent
  ],
  exports: [
    PageNotFoundComponent,
    DashboardComponent,
    DepartmentItemComponent,
    DepartmentListComponent,
    EmployeeItemComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    DepartmentModule,
    EmployeeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AlertifyService,
    DepartmentService,
    EmployeeService
  ]
})
export class CoreModule { }
