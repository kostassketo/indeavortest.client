import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';

const employeeRoutes: Routes = [
  { path : 'employees/create', component : EmployeeCreateComponent },
  { path : 'employees/:id', component : EmployeeDetailComponent },
  { path : 'employees/edit/:id', component : EmployeeEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      employeeRoutes
    )
  ]
})

export class EmployeeRoutingModule { }
