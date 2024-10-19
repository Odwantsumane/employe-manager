import { Injectable } from '@angular/core';
import { Employee, EmployeesService } from './Data/employees.service';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 success: boolean = false;
 responseReceived: boolean = false;
 username: string = "";

  constructor(private employee: EmployeesService) { }

  LoginAuth(username : string, password : number) : boolean{
    this.username = username;

    this.employee.getEmployee(password).subscribe(
      response => this.handleSuccess(response),
      error => this.handleError(error));

      var count = setInterval(() => {
        
        if(this.responseReceived) {
          clearInterval(count);
        }
          
      }, 100);

    return this.success;
  }

  isUserLoggedIn() : boolean {
    let user = sessionStorage.getItem("user");

    return !(user === null);
  }

  loggout() : void {
    sessionStorage.removeItem("user");
  }

  handleSuccess(response: Employee) {
    this.responseReceived = true;

    if(this.username === response.name) this.success = true;
    if (this.success) sessionStorage.setItem("user", response.name); 
  }

  handleError(error: any) {
    this.responseReceived = true; 

    console.log("Error: " + error);
  }
}
