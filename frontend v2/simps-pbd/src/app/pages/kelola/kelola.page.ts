import { Component, OnDestroy, OnInit } from '@angular/core';
import { LaporanComponentService } from 'src/app/core/services/laporan-component.service';
import { PasanganService } from 'src/app/core/services/pasangan.service';

@Component({
  selector: 'app-kelola',
  templateUrl: './kelola.page.html',
  styleUrls: ['./kelola.page.scss'],
})
export class KelolaPage implements OnInit, OnDestroy {
  constructor(
    private _pasanganService: PasanganService,
    private _laporanService: LaporanComponentService
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this._laporanService.loadLaporan();
  }
}
