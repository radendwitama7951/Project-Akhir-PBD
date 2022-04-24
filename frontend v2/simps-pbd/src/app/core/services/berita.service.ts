import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { BeritaInterface } from 'src/app/core/interfaces/berita.interface';

@Injectable({ providedIn: 'root' })
export class BeritaService extends EntityCollectionServiceBase<BeritaInterface> {
  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Berita', serviceElementFactory);
  }
}
