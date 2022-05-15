import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { LaporanInterface } from 'src/app/core/interfaces/laporan.interface';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { format } from 'date-fns';
import { response } from 'express';

@Injectable({ providedIn: 'root' })
export class LaporanComponentService {
  private readonly laporanApiUrl: string = environment.apiUrl + 'laporan/';
  private now: Date;

  public readonly datasource$: BehaviorSubject<LaporanInterface> =
    new BehaviorSubject({
      user_id: 0,
      from_tanggal: '',
      to_tanggal: '',
      pengeluaran: {
        biaya: [],
        tanggal: [],
      },
      rasio_pasangan_kencan: {
        status_pasangan: [],
        total_kencan: [],
      },
      pasangan_kencan_teratas: [],
    });
  public readonly loading$: BehaviorSubject<boolean> = new BehaviorSubject(
    true
  );

  constructor(private httpClient: HttpClient) {
    this.now = new Date();
    this.loadLaporan();
  }

  public getLaporan(): Observable<LaporanInterface> {
    this.loadLaporan();
    return this.datasource$.pipe(tap((_) => this.loading$.next(false)));
  }

  public getLaporanByParams(): Observable<LaporanInterface> {
    let params = new HttpParams();
    params = params.append('user_id', 1);
    params = params.append(
      'from_tanggal',
      format(
        new Date(this.now.getFullYear(), this.now.getMonth(), 1),
        'yyyy-MM-dd'
      )
    );
    params = params.append(
      'to_tanggal',
      format(
        new Date(this.now.getFullYear(), this.now.getMonth() + 1, 0),
        'yyyy-MM-dd'
      )
    );
    return this.httpClient
      .get<LaporanInterface>(this.laporanApiUrl, {
        params: params,
      })
      .pipe(tap((_) => this.loading$.next(false)));
  }

  public loadLaporan(): void {
    this.loading$.next(true);
    let params = new HttpParams();
    params = params.append('user_id', 1);
    params = params.append(
      'from_tanggal',
      format(
        new Date(this.now.getFullYear(), this.now.getMonth(), 1),
        'yyyy-MM-dd'
      )
    );
    params = params.append(
      'to_tanggal',
      format(
        new Date(this.now.getFullYear(), this.now.getMonth() + 1, 0),
        'yyyy-MM-dd'
      )
    );
    this.httpClient
      .get<LaporanInterface>(this.laporanApiUrl, {
        params: params,
      })
      .pipe(tap((_) => this.loading$.next(false)))
      .subscribe((response: LaporanInterface) => {
        this.datasource$.next(response);
      });
  }
}
