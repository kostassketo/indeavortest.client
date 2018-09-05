import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { EmployeeResult } from '../../shared/_model/employee-result.model';
import { EmployeesResult } from '../../shared/_model/employees-result.model';
import { Employee } from '../../shared/_model/employee.model';

@Injectable()
export class EmployeeService {

    baseUrl = environment.apiUrl;
    apiControllerName = 'employees/';

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<EmployeesResult> {

        return this.http.get<EmployeesResult>(this.baseUrl + this.apiControllerName);
    }

    getEmployee(id: number): Observable<EmployeeResult> {

        return this.http.get<EmployeeResult>(this.baseUrl + this.apiControllerName + id);
    }

    getEmployeeByENumber(eNumber: string): Observable<EmployeeResult> {

        return this.http.get<EmployeeResult>(this.baseUrl + this.apiControllerName + eNumber);
    }

    updateEmployee(employee: Employee) {

      return this.http.patch(this.baseUrl + this.apiControllerName, employee);
    }

    createEmployee(employee: Employee) {

      return this.http.post(this.baseUrl + this.apiControllerName, employee);
    }

    deleteEmployee(id: number) {

      return this.http.delete(this.baseUrl + this.apiControllerName + id);
    }
}
