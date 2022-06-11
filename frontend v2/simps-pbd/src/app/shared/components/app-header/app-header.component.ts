import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { Observable } from 'rxjs';
import {
  count,
  filter,
  first,
  map,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs/operators';
import { LaporanComponentService } from 'src/app/core/services/laporan-component.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  private today = new Date(Date.now());
  @Input() public loading$?: Observable<boolean>;
  public isHandset$!: Observable<boolean>;
  public todayEventsCount$!: Observable<number>;
  public menuOption: Array<{ name: string; url: string }> = [
    { name: 'berita', url: '/berita' },
    { name: 'kelola', url: '/kelola' },
    { name: 'kencan', url: '/kencan' },
    { name: 'laporan', url: '/laporan' },
  ];

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private _utilsService: UtilsService
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .pipe(map(({ matches }) => matches));
  }

  ngOnInit() {
    this.setTodayEvent();
    this.todayEventsCount$.subscribe();
  }

  setTodayEvent(): void {
    this.todayEventsCount$ = this._utilsService.getTanggalPenting().pipe(
      switchMap((tanggalPentingList) =>
        tanggalPentingList.map((_) => _.tanggal)
      ),
      count(
        (tanggalPenting) => tanggalPenting == format(this.today, 'yyyy-MM-dd')
      )
    );
  }

  isHome(): boolean {
    return this.router.url == '/berita';
  }
}
