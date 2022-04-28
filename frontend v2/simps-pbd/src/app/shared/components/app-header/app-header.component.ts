import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  public isHandset$!: Observable<boolean>;
  public menuOption: Array<{ name: string; url: string }> = [
    { name: 'berita', url: '/berita' },
    { name: 'kelola', url: '/kelola' },
    { name: 'kencan', url: '/kencan' },
    { name: 'laporan', url: '/laporan' },
  ];

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(map(({ matches }) => matches));
  }

  ngOnInit() {}

  isHome(): boolean {
    return !(this.router.url == '/user');
  }
}
