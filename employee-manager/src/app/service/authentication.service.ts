import { Injectable } from '@angular/core';
import { Employee, EmployeesService } from './Data/employees.service';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 username: string = ""; 

  constructor(private employee: EmployeesService) { }

  LoginAuth(username : string, id : string) : Promise<boolean>{
    this.username = username; 
     
    return new Promise((resolve, reject) => {this.employee.getEmployee(id).subscribe(response => {
      resolve(this.handleSuccess(response));
    },error => {
      this.handleError(error);
      reject(false);
    })});
  }

  isUserLoggedIn() : boolean {
    let user = sessionStorage.getItem("user");

    return !(user === null);
  }

  loggout() : void {
    sessionStorage.removeItem("user");
  }

  handleSuccess(response: Employee): boolean { 

    if(this.username === response.name) {sessionStorage.setItem("user", response.name); return true;}
    return false;
  }

  handleError(error: any) { 

    console.log("Error: " + error);
  }
}
