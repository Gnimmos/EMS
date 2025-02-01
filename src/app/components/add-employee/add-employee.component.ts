import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-employee.component.html',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployee implements OnInit {
  employeeForm: FormGroup;
  isEditMode = false;
  employeeId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.fb.group({
      name: [''],
      email: [''],
      position: [''],
      salary: ['']
    });
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['id'];
    if (this.employeeId) {
      this.isEditMode = true;
      this.employeeService.getEmployeeById(this.employeeId).subscribe(employee => {
        this.employeeForm.patchValue(employee);
      });
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.employeeService.updateEmployee(this.employeeId!, this.employeeForm.value)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.employeeService.addEmployee(this.employeeForm.value)
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}