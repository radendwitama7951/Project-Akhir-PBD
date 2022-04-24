import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  public menuOption: Array<{ name: string; url: string }> = [
    { name: 'BERITA', url: '/berita' },
    { name: 'KELOLA', url: '/kelola' },
    { name: 'KENCAN', url: '/kencan' },
    { name: 'LAPORAN', url: '/laporan' },
  ];

  constructor() {}

  ngOnInit() {}
}
