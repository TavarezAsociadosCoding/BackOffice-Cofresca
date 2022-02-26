import { Component, OnInit } from '@angular/core';
import * as chartData from '../../shared/data/chart';
import { reportDB } from 'src/app/shared/tables/report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public report = [];

  constructor() {
    this.report = reportDB.report;
  }

  // lineChart
  public salesChartData = chartData.salesChartData;
  public salesChartLabels = chartData.salesChartLabels;
  public salesChartOptions = chartData.salesChartOptions;
  public salesChartColors = chartData.salesChartColors;
  public salesChartLegend = chartData.salesChartLegend;
  public salesChartType = chartData.salesChartType;

  public areaChart1 = chartData.areaChart1;
  public columnChart1 = chartData.columnChart1;
  public lineChart = chartData.lineChart;

  public chart5 = chartData.chart6

  public settings = {
    actions: {
      position: 'right'
    },
    columns: {
      name: {
        title: 'Name',
      },
      id: {
        title: 'Transfer Id',
        type: 'html'
      },
      date: {
        title: 'Date'
      },
      total: {
        title: 'Total'
      },
    },
  };

  ngOnInit() {
  }

}
