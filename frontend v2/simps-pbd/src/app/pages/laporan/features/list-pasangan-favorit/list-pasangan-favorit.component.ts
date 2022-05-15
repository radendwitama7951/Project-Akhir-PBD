import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';
import { PasanganService } from 'src/app/core/services/pasangan.service';

@Component({
  selector: 'app-list-pasangan-favorit',
  templateUrl: './list-pasangan-favorit.component.html',
  styleUrls: ['./list-pasangan-favorit.component.scss'],
})
export class ListPasanganFavoritComponent implements OnInit {
  public pasanganData!: PasanganInterface[];

  constructor() {}

  ngOnInit() {}
}
