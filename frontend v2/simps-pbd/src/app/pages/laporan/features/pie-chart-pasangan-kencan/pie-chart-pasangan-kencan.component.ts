import { Component } from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartOptions,
  ChartType,
} from 'chart.js';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart-pasangan-kencan',
  templateUrl: './pie-chart-pasangan-kencan.component.html',
  styleUrls: ['./pie-chart-pasangan-kencan.component.scss'],
})
export class PieChartPasanganKencanComponent {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      datalabels: {
        color: '#fff',
      },
    },
  };

  public pieChartData!: ChartConfiguration['data'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [DatalabelsPlugin];

  constructor() {}
}
