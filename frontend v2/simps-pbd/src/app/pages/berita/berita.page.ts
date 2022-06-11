import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

import { BeritaService } from 'src/app/core/services/berita.service';
import { BeritaInterface } from 'src/app/core/interfaces/berita.interface';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
  EntityServices,
} from '@ngrx/data';
import { IonInfiniteScroll } from '@ionic/angular';
import { delay, first, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.page.html',
  styleUrls: ['./berita.page.scss'],
})
export class BeritaPage implements OnInit, OnDestroy {
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
  private destroyed$ = new Subject<boolean>();
  public berita$!: Observable<BeritaInterface[]>;
  public loading$!: Observable<boolean>;

  constructor(private _beritaService: BeritaService) {}

  ngOnInit() {
    this.loading$ = this._beritaService.loading$;
    this.berita$ = this._beritaService
      .getAll()
      .pipe(takeUntil(this.destroyed$));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  loadBerita(event: any): any {
    this.loading$.pipe(takeUntil(this.destroyed$)).subscribe((done) => {
      event.target.complete();
    });

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    this._beritaService.keys$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((values: number[]) => {
        if (values.length > 25) {
          event.target.disabled = true;
        }
      });
  }

  public search(beritaId: string): void {
    let berita: Observable<BeritaInterface> =
      this._beritaService.getByKey(beritaId);
  }
}
