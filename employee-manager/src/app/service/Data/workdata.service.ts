import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class AllEmployeeWorkData {
  constructor(){}
}

@Injectable({
  providedIn: 'root'
})
export class WorkdataService {

  constructor(private http: HttpClient) { }

  getAllEmployeeWorkData() {
    //this.http.get<Array<AllEmployeeWorkData>>('http://localhost:4004/AllEmployeeWorkData');
  }

  getEmployeeWorkData(id:Number) {
    //this.http.get<Array<AllEmployeeWorkData>>(`http://localhost:4004/AllEmployeeWorkData/${id}`);
  }


}
