import { Component, OnInit } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { WorkdataService } from '../service/Data/workdata.service';
import { EmployeesService } from '../service/Data/employees.service';
import { Employee } from '../service/Data/employees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hours',
  standalone: true,
  imports: [BarChartComponent, CommonModule],
  templateUrl: './hours.component.html',
  styleUrl: './hours.component.css'
})
export class HoursComponent {

  EmployeeList : Array<Employee> = [];
  loading : boolean = false;
  message: String = "hello World";


  constructor(private employeeworkdataservice: EmployeesService) {}

  ngOnInit() {

    this.employeeworkdataservice.getAllEmployees().subscribe(
      response => this.handleSuccess(response),
      error => this.handleError(error)
    );
    
  }

  getAllEmployees() {
    this.employeeworkdataservice.getAllEmployees().subscribe(
      response => this.handleSuccess(response),
      error => this.handleError(error)
    );
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

  refresh() {
    console.log('refreshed');
    this.getAllEmployees();
  }
}
