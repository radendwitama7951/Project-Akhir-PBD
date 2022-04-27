import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BeritaService } from 'src/app/core/services/berita.service';
import { BeritaInterface } from 'src/app/core/interfaces/berita.interface';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
  EntityServices,
} from '@ngrx/data';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.page.html',
  styleUrls: ['./berita.page.scss'],
})
export class BeritaPage implements OnInit {
  private beritaService!: EntityCollectionService<BeritaInterface>;
  public berita$!: Observable<BeritaInterface[]>;

  constructor(private entityServices: EntityServices) {
    this.beritaService = entityServices.getEntityCollectionService('Berita');

    this.beritaService.getAll();
    this.berita$ = this.beritaService.entities$;
  }

  ngOnInit() {
    this.berita$.subscribe(console.log);
  }

  public search(beritaId: string): void {
    let berita: Observable<BeritaInterface> =
      this.beritaService.getByKey(beritaId);
  }
}
