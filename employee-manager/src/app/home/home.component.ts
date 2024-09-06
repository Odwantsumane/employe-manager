import { Component, OnInit } from '@angular/core';
import bootstrap from '../../main.server';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private authenticate: AuthenticationService) {}

  ngOnInit() {
    
  }
}
