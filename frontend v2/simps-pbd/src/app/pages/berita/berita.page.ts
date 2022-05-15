import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { BeritaService } from 'src/app/core/services/berita.service';
import { BeritaInterface } from 'src/app/core/interfaces/berita.interface';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
  EntityServices,
} from '@ngrx/data';
import { IonInfiniteScroll } from '@ionic/angular';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.page.html',
  styleUrls: ['./berita.page.scss'],
})
export class BeritaPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
  private beritaService!: EntityCollectionService<BeritaInterface>;
  private subscriptions: Subscription = new Subscription();
  public berita$!: Observable<BeritaInterface[]>;
  public loading$!: Observable<boolean>;

  constructor(private entityServices: EntityServices) {
    this.beritaService = entityServices.getEntityCollectionService('Berita');

    this.beritaService.getAll();
    this.berita$ = this.beritaService.entities$;
    this.loading$ = this.beritaService.loading$;
  }

  ngOnInit() {
    this.berita$.subscribe(console.log);
  }

  loadBerita(event: any): any {
    this.subscriptions.add(
      this.loading$.subscribe((done) => {
        event.target.complete();
      })
    );

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    this.subscriptions.add(
      this.beritaService.keys$.subscribe((values: number[]) => {
        if (values.length > 25) {
          event.target.disabled = true;
        }
      })
    );
  }

  public search(beritaId: string): void {
    let berita: Observable<BeritaInterface> =
      this.beritaService.getByKey(beritaId);
  }
}
