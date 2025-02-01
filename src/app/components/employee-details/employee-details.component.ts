import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule, Location  } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetails implements OnInit {
  employee: any;
history: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService,  private location: Location) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(id).subscribe(employee => this.employee = employee);
  }
  goBack(): void {
    this.location.back(); 
  }
}