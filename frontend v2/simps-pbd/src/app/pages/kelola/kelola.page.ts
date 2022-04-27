import { Component, OnInit } from '@angular/core';
import { PasanganService } from 'src/app/core/services/pasangan.service';

@Component({
  selector: 'app-kelola',
  templateUrl: './kelola.page.html',
  styleUrls: ['./kelola.page.scss'],
})
export class KelolaPage implements OnInit {
  constructor(private _pasanganService: PasanganService) {}

  ngOnInit() {
    this._pasanganService.getAll();
  }
}
