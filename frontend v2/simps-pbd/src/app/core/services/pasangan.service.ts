import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { PasanganInterface } from '../interfaces/pasangan.interface';

@Injectable({
  providedIn: 'root',
})
export class PasanganService extends EntityCollectionServiceBase<PasanganInterface> {
  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Pasangan', serviceElementFactory);
  }

  public getSpecialName(pasangan_id: number): string {
    let specialName!: string;
    this.getByKey(pasangan_id).subscribe(
      (pasangan: PasanganInterface) => (specialName = pasangan.special_name)
    );
    return specialName;
  }

  public selectEntityById(pasangan_id: number): Observable<PasanganInterface> {
    return this.entityMap$.pipe(
      map((entities) => entities[pasangan_id]),
      first()
    );
  }
}
