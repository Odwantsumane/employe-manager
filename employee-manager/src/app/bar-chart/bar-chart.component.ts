import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../service/Data/employees.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {

  totalDayhours: number = 8; 

  @Input() empList: Array<Employee> = [];

  constructor(private router: Router) {}

  ngOnInit() { 
    console.log(this.empList);
  }

  refreshGraphs() { 
    // let store = this.empList; 
    // this.empList = new Array<Employee>;
    // console.log(this.empList);
    console.log("graph refreshed");
    //this.router.navigate([this.router.url]);
    
  }

}
