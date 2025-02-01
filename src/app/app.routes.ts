import { Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list.component';
import { AddEmployee } from './components/add-employee/add-employee.component';
import { EmployeeDetails } from './components/employee-details/employee-details.component';


export const routes: Routes = [
    { path: '', component: EmployeeList },
    { path: 'add', component: AddEmployee },
    { path: 'edit/:id', component: AddEmployee },
    { path: 'details/:id', component: EmployeeDetails },
    { path: '**', redirectTo: '' }
];
