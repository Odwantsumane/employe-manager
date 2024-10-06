import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  name : string = "";
  surname : string = "";

  // FormData = {
  //   name: "",
  //   surname: "",
  //   email: "",
  //   role: "",
  //   salary: "",
  //   password: "",
  //   position: "",
  //   years:""
  // }
  constructor() {}

  ngOnInit(): void {
    
  }

  onSubmit(form: any) {
    console.log(form.value);
  }


}
