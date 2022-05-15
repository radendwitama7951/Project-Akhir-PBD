import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceElementsFactory,
  EntityCollectionServiceBase,
} from '@ngrx/data';
import { format } from 'date-fns';
import { Observable } from 'rxjs';
import { LaporanInterface } from '../interfaces/laporan.interface';

@Injectable({
  providedIn: 'root',
})
export class LaporanService extends EntityCollectionServiceBase<any> {
  private now = new Date();

  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Laporan', serviceElementsFactory);
  }

  public getCurrentMonth(): Observable<LaporanInterface | any> {
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
    return this.getWithQuery(params.toString())[0];
  }
}
