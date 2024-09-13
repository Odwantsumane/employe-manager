//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';

export class day {
  constructor(public date: String, public hours: Number, public day:String) {}
}
export class Employee {
  constructor(public name:string,public surname:string,public role:string,
    public position:string,public salary:string,public years:string,
    public hoursWorked: number, public countDays: Number,
     public countWeeks: Number, public day:String, public days: Array<day>){};
}
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  //http client
  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get<Array<Employee>>(`http://localhost:4004/AllEmployees`);
  }
}
