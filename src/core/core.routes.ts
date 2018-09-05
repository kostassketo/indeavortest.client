import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentModule } from '../department/department.module';
import { EmployeeModule } from '../employee/employee.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const coreRoutes: Routes = [
   { path : '', component : DashboardComponent },
   { path : 'departments', loadChildren: '../department/department.module#DepartmentModule' },
   { path : 'employees', loadChildren: '../employee/employee.module#EmployeeModule' },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule,
    DepartmentModule,
    EmployeeModule
  ]
})

export class CoreRoutingModule { }
