import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  LoginAuth(username : string, password : string) : boolean{

    if (username === "Odwa" && password === "1234") {
      sessionStorage.setItem("user", username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() : boolean {
    let user = sessionStorage.getItem("user");

    return !(user === null);
  }

  loggout() : void {
    sessionStorage.removeItem("user");
  }
}
