import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceElementsFactory,
  EntityCollectionServiceBase,
} from '@ngrx/data';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KencanInterface } from '../interfaces/kencan.interface';
import { PasanganInterface } from '../interfaces/pasangan.interface';
import { PasanganService } from './pasangan.service';

@Injectable({
  providedIn: 'root',
})
export class KencanService extends EntityCollectionServiceBase<KencanInterface> {
  private dataPasangan$: BehaviorSubject<PasanganInterface[]> =
    new BehaviorSubject([]);

  constructor(
    private _pasanganService: PasanganService,
    private serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Kencan', serviceElementsFactory);
  }

  getAllDenormalize(): Observable<KencanInterface[]> {
    return this.getAll().pipe(
      map((dataKencan: KencanInterface[]) => {
        dataKencan.forEach((kencan: KencanInterface) => {
          this._pasanganService
            .getByKey(kencan.pasangan_id)
            .subscribe((pasangan: PasanganInterface) => {
              kencan.pasangan_id = pasangan.special_name;
            });
        });
        return dataKencan;
      })
    );
  }
}
