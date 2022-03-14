import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CardNewsInterface } from './types/card-news.interface';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  cardNews: CardNewsInterface[] = ([
          { title: 'Hana sedang Berulang Tahun !', imgUrl: 'https://picsum.photos/1440/720' ,  cols: 1, rows: 1 },
          { title: 'Ayah Lisa Berulang Tahun !', imgUrl: 'https://picsum.photos/600/500' ,  cols: 1, rows: 1 },
          { title: 'Dewi mendapatkan Pekerjaan Baru !', imgUrl: 'https://picsum.photos/600/500' ,  cols: 1, rows: 1 },
          { title: 'Laras sedang berlibur ke Bali !', imgUrl: 'https://picsum.photos/600/500' ,  cols: 1, rows: 1 },
          { title: 'Hana sedang Berulang Tahun !', imgUrl: 'https://picsum.photos/600/720' ,  cols: 1, rows: 1 },
          { title: 'Ayah Lisa Berulang Tahun !', imgUrl: 'https://picsum.photos/1440/500' ,  cols: 2, rows: 1 },
          { title: 'Dewi mendapatkan Pekerjaan Baru !', imgUrl: 'https://picsum.photos/600/500' ,  cols: 1, rows: 1 },
          { title: 'Laras sedang berlibur ke Bali !', imgUrl: 'https://picsum.photos/600/500' ,  cols: 1, rows: 1 },
  ]);
 

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map( ({ matches }) => {
      if (!matches) {
        this.cardNews[0].cols = 2;
        this.cardNews[0].rows = 2;
      }
      return this.cardNews; 
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
  }
}
