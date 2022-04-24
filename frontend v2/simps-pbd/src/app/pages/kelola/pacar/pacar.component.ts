import { Component, OnInit } from '@angular/core';
import { STATUS_PASANGAN } from 'src/app/core/interfaces/pasangan.interface';

@Component({
  selector: 'app-pacar',
  templateUrl: './pacar.component.html',
  styleUrls: ['./pacar.component.scss'],
})
export class PacarComponent implements OnInit {
  public statusPasanganForTable: STATUS_PASANGAN = STATUS_PASANGAN.PACAR;

  constructor() {}

  ngOnInit() {}
}
