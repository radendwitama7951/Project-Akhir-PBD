import { Component, OnInit } from '@angular/core';
import { PasanganService } from 'src/app/core/services/pasangan.service';
import { KencanService } from 'src/app/core/services/kencan.service';

@Component({
  selector: 'app-kencan',
  templateUrl: './kencan.page.html',
  styleUrls: ['./kencan.page.scss'],
})
export class KencanPage implements OnInit {
  constructor(
    private _pasanganService: PasanganService,
    private _kencanService: KencanService
  ) {
    this._kencanService.getAll();
  }

  ngOnInit() {}
}
