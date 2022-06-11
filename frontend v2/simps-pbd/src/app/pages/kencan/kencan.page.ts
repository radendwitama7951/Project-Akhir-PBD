import { Component, OnDestroy, OnInit } from '@angular/core';
import { PasanganService } from 'src/app/core/services/pasangan.service';
import { KencanService } from 'src/app/core/services/kencan.service';
import { LaporanComponentService } from 'src/app/core/services/laporan-component.service';

@Component({
  selector: 'app-kencan',
  templateUrl: './kencan.page.html',
  styleUrls: ['./kencan.page.scss'],
})
export class KencanPage implements OnInit, OnDestroy {
  constructor(
    private _kencanService: KencanService,
    private _laporanService: LaporanComponentService
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {}
}
