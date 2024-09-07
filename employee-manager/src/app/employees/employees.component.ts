import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../service/Data/employees.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Employee } from '../service/Data/employees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  providers: [],
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  EmployeeList : Array<Employee> = [];
  loading : boolean = false;

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
    this.getAllEmployeeDetails.getAllEmployees().subscribe(
      response => this.handleSuccess(response),
      error => this.handleError(error)
    );
  }

  handleSuccess(response:Array<Employee>) {
    //console.log(response.pop());
    this.loading = false;
    this.EmployeeList = response;
    //console.log(response[0].name);
  }

  handleError(error:Object) {
    console.log(error);
  }
}
