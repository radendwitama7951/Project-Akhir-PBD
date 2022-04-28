import { Component, OnInit, Input } from '@angular/core';

import { BeritaInterface } from 'src/app/core/interfaces/berita.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() public dataBerita!: BeritaInterface;

  constructor() {}

  ngOnInit() {}
}
