import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-graph-daywise',
  templateUrl: './bar-graph-daywise.component.html',
  styleUrls: ['./bar-graph-daywise.component.css']
})
export class BarGraphDaywiseComponent implements OnInit {

  constructor() { }
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Recommended'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Achieved'}
  ];

  ngOnInit() {
  }

}
