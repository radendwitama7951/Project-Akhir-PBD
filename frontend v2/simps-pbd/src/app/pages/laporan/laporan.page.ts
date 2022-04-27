import { Component, OnInit } from '@angular/core';
import { EntityServices } from '@ngrx/data';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.page.html',
  styleUrls: ['./laporan.page.scss'],
})
export class LaporanPage implements OnInit {
  // private laporanService!: EntityCollectionService<LaporanInterface>;
  // public laporan$!: Observable<LaporanInterface[]>;

  constructor(private enitityServices: EntityServices) {}

  ngOnInit() {}
}
