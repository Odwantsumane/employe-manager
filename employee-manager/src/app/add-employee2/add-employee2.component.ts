import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-employee2.component.html',
  styleUrl: './add-employee2.component.css'
})
export class AddEmployee2Component implements OnInit {

  submitted : boolean = false;

  FormData = {
    name: "",
    surname: "",
    email: "",
    role: "",
    salary: "", 
    position: "",
    years:""
  }
  constructor() {}

  ngOnInit(): void {
    
  }

  onSubmit(form: any) {
    console.log(form.value);

    // validate the data
    this.submitted = true;
    if (this.FormData.name !== "" || this.FormData.surname !== "" || this.FormData.email !== ""
      || this.FormData.role !== "" || this.FormData.salary !== "" || this.FormData.position !== "" 
      || this.FormData.years !== "")
      {
        console.log("Employee has been added");

        // refresh
        this.FormData.name = "";
        this.FormData.surname = "";
        this.FormData.email = "";
        this.FormData.role = "";
        this.FormData.salary = "";
        this.FormData.position = "";
        this.FormData.years = "";
        this.submitted = false;

      } else {
        console.log("Failed to add employee");
      }
  }


}
