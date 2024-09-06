//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';


export class Employee {
  constructor(Name:string,Surname:string,Role:string,Position:string,Salary:string,Years:string){};
}
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  //http client
  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get<Employee>(`http://localhost:4004/AllEmployees`);
  }
}
