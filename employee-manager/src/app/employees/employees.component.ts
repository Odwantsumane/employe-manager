import { Component } from '@angular/core';
import { EmployeesService } from '../service/Data/employees.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  providers: [],
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  constructor(private getAllEmployeeDetails: EmployeesService) {}

  getAllEmployees() {
    this.getAllEmployeeDetails.getAllEmployees().subscribe(
      response => this.handleSuccess(response),
      error => this.handleError(error)
    );
  }

  handleSuccess(response:Object) {
    console.log(response);
  }

  handleError(error:Object) {
    console.log(error);
  }
}
