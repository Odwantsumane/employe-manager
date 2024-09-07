//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';


export class Employee {
  constructor(public name:string,public surname:string,public role:string,public position:string,public salary:string,public years:string){};
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
