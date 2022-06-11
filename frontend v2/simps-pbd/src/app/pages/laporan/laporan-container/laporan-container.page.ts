import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { LaporanInterface } from 'src/app/core/interfaces/laporan.interface';
import { LaporanComponentService } from 'src/app/core/services/laporan-component.service';
import { LineChartPengeluaranComponent } from '../features/line-chart-pengeluaran/line-chart-pengeluaran.component';
import { ListPasanganFavoritComponent } from '../features/list-pasangan-favorit/list-pasangan-favorit.component';
import { PieChartPasanganKencanComponent } from '../features/pie-chart-pasangan-kencan/pie-chart-pasangan-kencan.component';

@Component({
  selector: 'app-laporan-container',
  templateUrl: './laporan-container.page.html',
  styleUrls: ['./laporan-container.page.scss'],
})
export class LaporanContainerPage implements OnInit, AfterViewInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();
  public loading$?: Observable<boolean>;

  @ViewChild(LineChartPengeluaranComponent)
  private chartPengeluaran: LineChartPengeluaranComponent;
  @ViewChild(PieChartPasanganKencanComponent)
  private chartRasioPasangan: PieChartPasanganKencanComponent;
  @ViewChild(ListPasanganFavoritComponent)
  private listPasanganTeratas: ListPasanganFavoritComponent;

  public today: Date = new Date(Date.now());
  constructor(private _laporanService: LaporanComponentService) {
    this.loading$ = this._laporanService.loading$;
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this._laporanService.datasource$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((laporan: LaporanInterface) => {
        this.chartPengeluaran.lineChartData = {
          datasets: [
            {
              data: laporan?.pengeluaran.biaya.map(
                (
                  (sum) => (value: number) =>
                    (sum += value)
                )(0)
              ),
              label: new Date(Date.now()).toLocaleString('id', {
                month: 'long',
              }),
              fill: 'origin',
            },
          ],
          labels: laporan?.pengeluaran.tanggal,
        };

        this.chartRasioPasangan.pieChartData = {
          labels: laporan?.rasio_pasangan_kencan.status_pasangan,
          datasets: [
            {
              data: laporan?.rasio_pasangan_kencan.total_kencan,
            },
          ],
        };

        this.listPasanganTeratas.pasanganData =
          laporan?.pasangan_kencan_teratas;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }
}
