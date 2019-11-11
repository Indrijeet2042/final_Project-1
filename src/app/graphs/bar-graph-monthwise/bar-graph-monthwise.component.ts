import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-graph-monthwise',
  templateUrl: './bar-graph-monthwise.component.html',
  styleUrls: ['./bar-graph-monthwise.component.css']
})
export class BarGraphMonthwiseComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86], label: 'Recommended'},
    {data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56], label: 'Achieved'}
  ];
  
  ngOnInit() {
  }

}
