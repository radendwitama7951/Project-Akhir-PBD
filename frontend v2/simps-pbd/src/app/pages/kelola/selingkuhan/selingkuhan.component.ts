import { Component, OnInit } from '@angular/core';
import { STATUS_PASANGAN } from 'src/app/core/interfaces/pasangan.interface';

@Component({
  selector: 'app-selingkuhan',
  templateUrl: './selingkuhan.component.html',
  styleUrls: ['./selingkuhan.component.scss'],
})
export class SelingkuhanComponent implements OnInit {
  public statusPasanganForTable: STATUS_PASANGAN = STATUS_PASANGAN.PACAR;

  constructor() {}

  ngOnInit() {}
}
