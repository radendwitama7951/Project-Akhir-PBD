import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { LaporanComponentService } from 'src/app/core/services/laporan-component.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.page.html',
  styleUrls: ['./laporan.page.scss'],
})
export class LaporanPage implements OnInit, OnDestroy {
  public currentMonth = new Date(Date.now()).toLocaleString('id', {
    month: 'long',
    year: 'numeric',
  });
  public activeUser$!: Observable<UserInterface>;

  constructor(
    private _userService: UserService,
    private _laporanService: LaporanComponentService
  ) {}

  ngOnInit() {
    this.activeUser$ = this._userService.getByKey(1);
    this._laporanService.loadLaporan();
  }

  ngOnDestroy(): void {}

  refreshLaporan(): void {
    this._laporanService.loadLaporan();
  }
}
