import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentCreateComponent } from './pages/department-create/department-create.component';
import { DepartmentDetailComponent } from './pages/department-detail/department-detail.component';
import { DepartmentEditComponent } from './pages/department-edit/department-edit.component';


const departmentRoutes: Routes = [
 { path : 'departments/create', component : DepartmentCreateComponent },
 { path : 'departments/:id', component : DepartmentDetailComponent },
 { path : 'departments/edit/:id', component : DepartmentEditComponent }
];

@NgModule({
 imports: [
     RouterModule.forChild(departmentRoutes)
 ]
})

export class DepartmentRoutingModule { }
