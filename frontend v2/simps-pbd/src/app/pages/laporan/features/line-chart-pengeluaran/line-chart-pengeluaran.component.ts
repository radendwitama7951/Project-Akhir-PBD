import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart-pengeluaran',
  templateUrl: './line-chart-pengeluaran.component.html',
  styleUrls: ['./line-chart-pengeluaran.component.scss'],
})
export class LineChartPengeluaranComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public lineChartType: ChartType = 'line';
  private datasource: Array<number> = [...Array(31).keys()] as Array<number>;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.datasource,
        label: 'Bulan Mei',
        fill: 'origin',
      },
    ],
    labels: [...Array(31).keys()],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0': {
        position: 'left',
      },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },
  };

  constructor() {
    this.datasource.forEach((el: number) => el * 12000);
  }
}
