import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public apiUrl = 'http://localhost:5000/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post(this.apiUrl, employee);
  }

  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}