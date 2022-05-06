import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart-pengeluaran',
  templateUrl: './line-chart-pengeluaran.component.html',
  styleUrls: ['./line-chart-pengeluaran.component.scss'],
})
export class LineChartPengeluaranComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public lineChartType: ChartType = 'line';
  public chartAspectRatioY$!: Observable<number>;
  private datasource: Array<number> = [...Array(31).keys()] as Array<number>;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.datasource,
        label: 'Bulan Mei',
        fill: 'origin',
      },
    ],
    labels: [...Array(31).keys()].map((tanggal: number) => tanggal + 1),
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

  constructor(private breakpointObserver: BreakpointObserver) {
    this.chartAspectRatioY$ = this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .pipe(map(({ matches }) => (matches ? 2 : 1)));

    this.datasource.forEach((el: number) => el * 12000);
  }
}
