import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Component,
  ViewChild,
  OnInit,
  Input,
  AfterContentInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

import { Observable, Subscription } from 'rxjs';
import { first, map, take } from 'rxjs/operators';

import { KencanInterface } from 'src/app/core/interfaces/kencan.interface';
import { KencanService } from 'src/app/core/services/kencan.service';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.scss'],
})
export class StepTwoFormComponent implements OnInit, OnDestroy {
  @Input() public selectedKencanId?: string;

  public selectedKencan$?: Observable<KencanInterface>;
  public loading$!: Observable<boolean>;

  private subscriptions: Subscription = new Subscription();

  public tanggalKencan!: string;
  public jamKencan!: string;
  public showDatePick: boolean = false;
  public showTimePick: boolean = false;
  public datetimeValue!: string;

  public minDate = format(new Date(Date.now()), 'yyyy-MM');

  public isHandset$!: Observable<boolean>;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private _kencanService: KencanService
  ) {
    this.loading$ = this._kencanService.loading$;
    this.isHandset$ = breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .pipe(map(({ matches }) => matches));
  }

  ngOnInit() {
    this.selectedKencan$ = this._kencanService.getByKey(this.selectedKencanId);

    this.subscriptions.add(
      this.selectedKencan$.subscribe((kencan: KencanInterface) => {
        this.tanggalKencan = kencan.tanggal;
        this.jamKencan = kencan.jam;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  gantiTanggalKencan(date: string): void {
    this.selectedKencan$ = this._kencanService.selectEntityById(
      this.selectedKencanId
    );

    let updateTanggalKencan: any = {
      tanggal: this.formatDate(date),
      Waktu: this.jamKencan,
    };

    this.selectedKencan$.pipe(first()).subscribe((kencan) => {
      updateTanggalKencan = { ...kencan, ...updateTanggalKencan };
    });

    this._kencanService.update(updateTanggalKencan);
    this._kencanService.load();

    this.tanggalKencan = date;

    this.showDatePick = false;
  }

  gantiWaktuKencan(time: string): void {
    this.selectedKencan$ = this._kencanService.selectEntityById(
      this.selectedKencanId
    );
    let updateWaktuKencan: any = {
      jam: time,
      tanggal: this.tanggalKencan,
    };

    let subscriptions: Subscription = this.selectedKencan$.subscribe(
      (kencan: KencanInterface) => {
        updateWaktuKencan = { ...kencan, ...updateWaktuKencan };
      }
    );

    this._kencanService.update(updateWaktuKencan);

    this.jamKencan = time;
    subscriptions.unsubscribe();
    this.showTimePick = false;
  }

  toggleDatePicker(): void {
    this.showDatePick = !this.showDatePick;
    this.showTimePick = false;
  }

  toggleTimePicker(): void {
    this.showTimePick = !this.showTimePick;
    this.showDatePick = false;
  }

  formatDate(value: string) {
    return format(parseISO(value), 'yyyy-MM-dd');
  }

  formatTime(value: string) {
    return format(parseISO(value), 'HH:mm:ss');
  }
}
