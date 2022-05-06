import { Component, OnInit } from '@angular/core';
import { EntityServices } from '@ngrx/data';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { PasanganService } from 'src/app/core/services/pasangan.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.page.html',
  styleUrls: ['./laporan.page.scss'],
})
export class LaporanPage implements OnInit {
  public activeUser$!: Observable<UserInterface>;

  constructor(
    private _userService: UserService,
    private _pasanganService: PasanganService
  ) {
    this.activeUser$ = this._userService.getByKey(1);
  }

  ngOnInit() {}
}
