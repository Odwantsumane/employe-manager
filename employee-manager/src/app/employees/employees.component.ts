import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../service/Data/employees.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Employee } from '../service/Data/employees.service';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { AddEmployee2Component } from '../add-employee2/add-employee2.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, AddEmployeeComponent, FormsModule, AddEmployee2Component],
  templateUrl: './employees.component.html',
  providers: [],
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  EmployeeList : Array<Employee> = [];
  loading : boolean = false;
  Refreshing : boolean = false;

  constructor(private getAllEmployeeDetails: EmployeesService) {}

  ngOnInit() {
    //while loading
    this.loading = true;

    this.getAllEmployeeDetails.getAllEmployees().subscribe(
      response => this.handleSuccess(response),
      error => this.handleError(error)
    );
  }

  getAllEmployees() {
    this.Refreshing = true;

    this.getAllEmployeeDetails.getAllEmployees().subscribe(
      response => this.handleSuccess(response),
      error => this.handleError(error)
    );

    if(!this.loading) this.Refreshing = false;
  }

  handleSuccess(response:Array<Employee>) {
    //console.log(response.pop());
    this.loading = false;
    this.EmployeeList = response;
    //console.log(response);
  }

  handleError(error:Object) {
    console.log(error);
  }
}
