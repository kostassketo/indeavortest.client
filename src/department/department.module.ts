import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DepartmentRoutingModule } from './department.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepartmentCreateComponent } from './pages/department-create/department-create.component';
import { DepartmentDetailComponent } from './pages/department-detail/department-detail.component';
import { DepartmentEditComponent } from './pages/department-edit/department-edit.component';
import { DepartmentService } from './_services/department.service';

@NgModule({
  declarations: [
    DepartmentCreateComponent,
    DepartmentDetailComponent,
    DepartmentEditComponent
  ],
  imports: [
    BrowserModule,
    DepartmentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DepartmentService,
  ]
})
export class DepartmentModule { }
