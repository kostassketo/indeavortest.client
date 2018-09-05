import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { DepartmentsResult } from '../../shared/_model/departments-result.model';
import { DepartmentResult } from '../../shared/_model/department-result.model';
import { Department } from '../../shared/_model/department.model';

@Injectable()
export class DepartmentService {

    baseUrl = environment.apiUrl;
    apiControllerName = 'departments/';

    constructor(private http: HttpClient) { }

    getDepartments(): Observable<DepartmentsResult> {

        return this.http.get<DepartmentsResult>(this.baseUrl + this.apiControllerName);
    }

    getDepartment(id: number): Observable<DepartmentResult> {

        return this.http.get<DepartmentResult>(this.baseUrl + this.apiControllerName + id);
    }

    getDepartmentByENumber(code: string): Observable<DepartmentResult> {

        return this.http.get<DepartmentResult>(this.baseUrl + this.apiControllerName + code);
    }

    updateDepartment(department: Department) {

      return this.http.patch(this.baseUrl + this.apiControllerName, department);
    }

    createDepartment(department: Department) {

      return this.http.post(this.baseUrl + this.apiControllerName, department);
    }

    deleteDepartment(id: number) {

      return this.http.delete(this.baseUrl + this.apiControllerName + id);
    }
}
