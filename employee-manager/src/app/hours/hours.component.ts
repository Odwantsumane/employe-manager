import { Component } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { WorkdataService } from '../service/Data/workdata.service';

@Component({
  selector: 'app-hours',
  standalone: true,
  imports: [BarChartComponent],
  templateUrl: './hours.component.html',
  styleUrl: './hours.component.css'
})
export class HoursComponent {

  constructor(private employeeworkdataservice: WorkdataService) {}
}
