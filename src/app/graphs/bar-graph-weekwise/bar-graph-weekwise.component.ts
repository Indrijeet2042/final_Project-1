import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-graph-weekwise',
  templateUrl: './bar-graph-weekwise.component.html',
  styleUrls: ['./bar-graph-weekwise.component.css']
})
export class BarGraphWeekwiseComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Recommended'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Achieved'}
  ];
  
  ngOnInit() {
  }

}
