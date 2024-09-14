import { Component, OnInit } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { WorkdataService } from '../service/Data/workdata.service';
import { EmployeesService } from '../service/Data/employees.service';
import { Employee } from '../service/Data/employees.service';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hours',
  standalone: true,
  imports: [BarChartComponent, CommonModule, PieChartComponent, FormsModule],
  templateUrl: './hours.component.html',
  styleUrl: './hours.component.css'
})
export class HoursComponent {

  EmployeeList : Array<Employee> = [];
  loading : boolean = false;
  message: String = "hello World";
  selectedChart: string = 'Charts';
  BarChartDisplay: boolean = true;
  PiechartDisplay: boolean = true;
  currentStyles: Record<string, string> = {};

  constructor(private employeeworkdataservice: EmployeesService) {}

  ngOnInit() {
    this.setCurrentStyles();
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

  onSelect(event: any) { 
    if(event.target.value === "Charts") {
      
      this.BarChartDisplay = true;
      this.PiechartDisplay = true;
    }
    else if (event.target.value === "Bar Chart") {
      
      this.BarChartDisplay = true;
      this.PiechartDisplay = false;
    }
    else {
      
      this.BarChartDisplay = false;
      this.PiechartDisplay = true;
    }

    this.setCurrentStyles();
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      // 'font-style': this.canSave ? 'italic' : 'normal',
      // 'font-weight': !this.isUnchanged ? 'bold' : 'normal', 
      // 'display': `${flex}`,
      'display': this.BarChartDisplay && this.PiechartDisplay ? 'flex' : 'block',
    };
  }
}
