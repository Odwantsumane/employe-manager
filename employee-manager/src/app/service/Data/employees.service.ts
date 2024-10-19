//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provideHttpClient, withFetch, HttpClient, HttpHeaders } from '@angular/common/http';
import { buffer } from 'stream/consumers';

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

  Headers: HttpHeaders = new HttpHeaders ({Authorization: this.createBasicAuthHeaders()});
  //http client
  constructor(private http: HttpClient) { }

  getAllEmployees() {

    return this.http.get<Array<Employee>>(`http://localhost:4004/AllEmployees`,  {headers: this.Headers});
  }

  getEmployee(id: number) {

    return this.http.get<Employee>(`http://localhost:4004/getEmployee/${id}`,  {headers: this.Headers});
  }

  addEmployee(employee: any) {  
    return this.http.post<Employee>(`http://localhost:4004/addEmployee`, employee, {headers: this.Headers});
  }

  createBasicAuthHeaders() {
    let username = "user";
    let password = "password"; 
    let BasicAuthHeader = "";

    if (typeof window !== 'undefined') {
      BasicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    } else {
      console.error("Window is not defined. Ensure you're running this in a browser.");
    }

    //let BasicAuthHeader = window.btoa(username + ":"+ password);
    //Buffer.from(encodedcred).toString("base64"); //window.btoa(username + ":"+ password); 
    return BasicAuthHeader;
  }
}
