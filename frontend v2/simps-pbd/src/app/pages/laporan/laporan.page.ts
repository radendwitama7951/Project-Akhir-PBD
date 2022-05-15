import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { LaporanComponentService } from 'src/app/core/services/laporan-component.service';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.page.html',
  styleUrls: ['./laporan.page.scss'],
})
export class LaporanPage implements OnInit, OnDestroy {
  public activeUser$!: Observable<UserInterface>;

  constructor(
    private _userService: UserService,
    private _laporanService: LaporanComponentService
  ) {
    this.activeUser$ = this._userService.getByKey(1);
    this._laporanService.loadLaporan();
  }

  ngOnInit() {}

  ngOnDestroy(): void {}

  refreshLaporan(): void {
    this._laporanService.loadLaporan();
  }
}
