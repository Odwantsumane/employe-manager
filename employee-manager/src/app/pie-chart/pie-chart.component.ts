import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../service/Data/employees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent implements OnInit {

  @Input() empList: Array<Employee> = [];
  totalDayhours: number = 8;
  // currentStyles: Record<string, string> = {};
  currentStyles: any = {};
  totalNumOfHours: number = 0;
  // slice1 = `conic-gradient(#ff6347 0% 0%, transparent 0% 0%)`;   // Employee A 
  // slice2 = `conic-gradient(#4682b4 0% 0%, transparent 0% 0%)`;  // Employee B , transparent 46% 100%
  // slice3 = `conic-gradient(#3cb371 0% 0%, transparent 0% 0%)`;  // Employee C , transparent 62% 100%
  // slice4 = `conic-gradient(#ffeb3b 0% 0%, transparent 0% 0%)`;  // Employee D , transparent 75% 100%
  // slice5 = `conic-gradient(#8a2be2 99% 10%, transparent 0% 100%)`;  // Employee E , transparent 100% 100%


  constructor() { console.log("hellows")}

  ngOnInit() {
    this.calculateTotalHrs();
    this.setStyles();
    //this.retrieveHours();
  }

  // retrieveHours() {
  //   this.empList.forEach(employee => {
  //     this.setStyles(employee.hoursWorked/this.totalDayhours * 100);
  //   });
  // }

  calculateTotalHrs() {
    this.empList.forEach(employee => {
      this.totalNumOfHours += employee.hoursWorked;
    })
  }

  setStyles() {
    //this.calculateTotalHrs();
    // console.log(this.empList[3].hoursWorked/this.totalNumOfHours * 100);

    var h1 = this.empList[0].hoursWorked/this.totalNumOfHours * 100;
    var h2 = this.empList[1].hoursWorked/this.totalNumOfHours * 100;
    var h3 = this.empList[2].hoursWorked/this.totalNumOfHours * 100;
    var h4 = this.empList[3].hoursWorked/this.totalNumOfHours * 100;
    var h5 = this.empList[4].hoursWorked/this.totalNumOfHours * 100; 
     
    this.currentStyles = {
      'background': `conic-gradient(
        #ff6347 0% ${h1}%,   /* Employee A (6 hours) */
        #4682b4 ${h1}% ${h2+h1}%,  /* Employee B (5 hours) */
        #3cb371 ${h2+h1}% ${h1+h2+h3}%,  /* Employee C */
        #8a2be2 ${h1+h2+h3}% ${h1+h2+h3+h4}%,   
        #ffeb3b ${h1+h2+h3+h4}% ${h1+h2+h3+h4+h5}%,
        #4682b4 ${h1+h2+h3+h4+h5}% 100%
      )`,
    };

     // #8a2be2 ${this.empList[3].hoursWorked/this.totalNumOfHours * 100}% ${this.empList[4].hoursWorked/this.totalNumOfHours * 100}%, 
        // #ff6347 ${this.empList[4].hoursWorked/this.totalNumOfHours * 100}% ${this.empList[5].hoursWorked/this.totalNumOfHours * 100}%,   
        // #4682b4 ${this.empList[5].hoursWorked/this.totalNumOfHours * 100}% 100%
    
  }
}
