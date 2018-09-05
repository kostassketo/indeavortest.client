import { Department } from './department.model';

export class Employee {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    title: string;
    role: string;
    dateOfBirth: Date;
    eNumber: string;
    avatar: string;
    gender: string;
    departmentId?: number;
    department: Department;
}
