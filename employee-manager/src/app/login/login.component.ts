import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isAuthenticated : boolean = false;
  incorrectCredentials : boolean = false;
  username : string = '';
  password : string = '';
  submitted: boolean = false;
  isUserLoggedIn : boolean = false;

   constructor(private authenticate: AuthenticationService, private router: Router) {

   }

   async handleLogin() {
    this.submitted = true;
    //console.log(`${this.username} just logged in`);
    (this.username === "" || this.password === "") ? this.incorrectCredentials = false : this.isAuthenticated = await this.authenticate.LoginAuth(this.username,this.password);
       
    if(this.isAuthenticated) {
      //this.router.navigate(['welcome', this.username]); 
      this.router.navigate(['']);
    } else {
      (this.username === "" || this.password === "") ? this.incorrectCredentials = false : this.incorrectCredentials = true;
    }
    
   }

   ngOnInit() {
     
   }
}
