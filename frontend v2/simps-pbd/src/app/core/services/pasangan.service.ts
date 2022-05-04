import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { PasanganInterface } from '../interfaces/pasangan.interface';

@Injectable({
  providedIn: 'root',
})
export class PasanganService extends EntityCollectionServiceBase<PasanganInterface> {
  private pasanganApiUrl: string = environment.apiUrl + 'pasangan/';
  private statusPasangan: string[] = ['mantan', 'pacar', 'selingkuhan'];

  constructor(
    serviceElementFactory: EntityCollectionServiceElementsFactory,
    private httpClient: HttpClient
  ) {
    super('Pasangan', serviceElementFactory);
  }

  /* @param data PasanganInterface
   *
   * @types Method
   * Pengganti bug ngrx/data add
   *
   * */
  public post(data: PasanganInterface): void {
    /*
    let dataSerializer: PasanganInterface = {
      pasangan_id: 0,
      first_name: '',
      last_name: '',
      special_name: '',
      avatar: '',
      kencan_terakhir: null,
      status_pasangan_id: 0,
      status_pasangan: this.getStatusPasangan(data.status_pasangan_id),
    };
    this.keys$.subscribe((ids: number[]) => {
      dataSerializer.pasangan_id = Math.max.apply(null, ids) + 1;
    });
    */

    this.add(data);
    this.load();

    /*
    this.httpClient
      .post(this.pasanganApiUrl, { ...dataSerializer, ...data })
      .subscribe();
      */
  }

  /* @param data PasanganInterface
   *
   * @types Method
   * Pengganti bug ngrx/data add
   *
   * */
  public put(data: PasanganInterface): void {
    /*
    let dataSerializer: PasanganInterface = {
      pasangan_id: 0,
      first_name: '',
      last_name: '',
      special_name: '',
      avatar: '',
      kencan_terakhir: 'belum pernah kencan',
      status_pasangan_id: 0,
      status_pasangan: this.getStatusPasangan(data.status_pasangan_id),
    };

    this.keys$.subscribe((ids: number[]) => {
      dataSerializer.pasangan_id = Math.max.apply(null, ids) + 1;
    });
*/
    this.update(data);
    this.load();
  }

  /* @status Deprecated
   * @types Utils
   * @param pasangan_id number
   * untuk mendapatkan data special_name berupa string
   * pada tabel pasangan
   *
   * */
  public getSpecialName(pasangan_id: number): string {
    let specialName!: string;
    this.getByKey(pasangan_id).subscribe(
      (pasangan: PasanganInterface) => (specialName = pasangan.special_name)
    );
    return specialName;
  }

  /* @type Utils
   * @param pasangan_id Number
   *
   * ambil data pasangan dari cache
   *
   * */
  public selectEntityById(
    pasangan_id: number | string
  ): Observable<PasanganInterface> {
    pasangan_id = pasangan_id as number;
    return this.entityMap$.pipe(
      map((entities) => entities[pasangan_id]),
      first()
    );
  }

  /* @types Utils
   * @param status_pasangan_id Number
   *
   * return status pasangan dalam rupa string
   * digunkan ketika post dan update
   * */
  public getStatusPasangan(status_pasangan_id: number): string {
    return this.statusPasangan[status_pasangan_id];
  }
}
