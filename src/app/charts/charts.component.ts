import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  constructor() {}

  charType = 'bar'

  

  types = [
    'area',
    'bar',
    'bubble',
    'column',
    'doughnut',
    'line',
    'pie',
    'spline',
    'splineArea',
    'scatter',
    'stackedArea',
    'stackedBar',
    'ctackedColumn',
    'stepLine',
    'stepArea',
    'rangeBar',
    'rangeColumn',
    'rangeArea',
    'rangeSplineArea',
    'candlestick',
    'ohlc',
    'boxAndWhisker',
    'pyramid',
    'funnel',
    'waterfall',
  ];

  ngOnInit(): void {
    this.renderChart()
  }

  renderChart(){
    let chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Basic Column Chart in Angular',
      },
      data: [
        {
          type: this.charType,
          dataPoints: [
            { y: 71, label: 'Apple' },
            { y: 55, label: 'Mango' },
            { y: 50, label: 'Orange' },
            { y: 65, label: 'Banana' },
            { y: 95, label: 'Pineapple' },
            { y: 68, label: 'Pears' },
            { y: 28, label: 'Grapes' },
            { y: 34, label: 'Lychee' },
            { y: 14, label: 'Jackfruit' },
          ],
        },
      ],
    });

    chart.render();
  }
}
