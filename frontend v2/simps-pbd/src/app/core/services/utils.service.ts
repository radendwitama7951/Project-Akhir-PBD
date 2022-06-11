import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format } from 'date-fns';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TanggalPentingInterface } from '../interfaces/utils.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public loading$ = new BehaviorSubject<boolean>(true);
  public tanggalPentingEntities = new BehaviorSubject<
    TanggalPentingInterface[]
  >([]);

  constructor(private httpClient: HttpClient) {}

  public getTanggalPenting(): Observable<TanggalPentingInterface[]> {
    this.loading$.next(true);
    const targetUrl = environment.urls.tanggalPenting;
    return this.httpClient.get<TanggalPentingInterface[]>(targetUrl).pipe(
      tap(() => this.loading$.next(false)),
      map((tanggalPentingList) =>
        tanggalPentingList.map((_) =>
          _.tipe != 'Kencan'
            ? {
                ..._,
                ...{
                  tanggal: format(
                    Date.parse(_.tanggal),
                    format(new Date(Date.now()), 'yyyy') + '-MM-dd'
                  ),
                },
              }
            : _
        )
      )
    );
  }

  public loadTanggalPenting(): void {
    this.getTanggalPenting()
      .pipe()
      .subscribe((res) => this.tanggalPentingEntities.next(res));
  }
}
