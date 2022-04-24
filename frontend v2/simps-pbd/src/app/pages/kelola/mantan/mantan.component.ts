import { Component, OnInit } from '@angular/core';
import { STATUS_PASANGAN } from 'src/app/core/interfaces/pasangan.interface';

@Component({
  selector: 'app-mantan',
  templateUrl: './mantan.component.html',
  styleUrls: ['./mantan.component.scss'],
})
export class MantanComponent implements OnInit {
  public statusPasangan: STATUS_PASANGAN = STATUS_PASANGAN.MANTAN;

  constructor() {}

  ngOnInit() {}
}
