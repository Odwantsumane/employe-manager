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
  incorrect : boolean = false;
  username : string = '';
  password : string = '';
  isUserLoggedIn : boolean = false;

   constructor(private authenticate: AuthenticationService, private router: Router) {

   }

   handleLogin() : void {
    //console.log(`${this.username} just logged in`);
    this.incorrect = !this.authenticate.LoginAuth(this.username, this.password);
    if(!this.incorrect) {
      //this.router.navigate(['welcome', this.username]);
      this.router.navigate(['']);
    }
    
   }

   ngOnInit() {
     
   }
}
