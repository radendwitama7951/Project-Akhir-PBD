import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  format,
  toDate,
} from 'date-fns';

import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { UtilsService } from 'src/app/core/services/utils.service';
import { first, map, takeUntil, tap } from 'rxjs/operators';
import { TanggalPentingInterface } from 'src/app/core/interfaces/utils.interface';
import { EventColor } from 'calendar-utils';
import { Router } from '@angular/router';

const colors: any = {
  primary: {
    primary: '#FF35D3',
    secondary: '#ff49d7',
  },
  secondary: {
    primary: '#50c8ff',
    secondary: '#62ceff',
  },
  success: {
    primary: '#2dd36f',
    secondary: '#42d77d',
  },
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-kalender-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./kalender.page.scss'],
  templateUrl: './kalender.page.html',
})
export class KalenderPage implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();
  private today = new Date();

  public loading$!: Observable<boolean>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh = new Subject<void>();

  public events!: CalendarEvent[];

  activeDayIsOpen: boolean = true;

  constructor(private _utilService: UtilsService, private router: Router) {}

  ngOnInit(): void {
    this.loading$ = this._utilService.loading$;
    this._utilService.loadTanggalPenting();
    this.setCalendarEvents();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  private setCalendarEvents(): void {
    this._utilService.tanggalPentingEntities
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (res) =>
          (this.events = res.map((_: TanggalPentingInterface) => ({
            start: new Date(Date.parse(_.tanggal)),
            title: _.tipe + ', ' + _.deskripsi,
            color: this.setEventColor(_.tipe),
            tipe: _.tipe,
          })))
      );
  }

  private setEventColor(tipe: string): EventColor {
    switch (tipe) {
      case 'Kencan':
        return colors.primary;
      case 'Ulang Tahun Pasangan':
        return colors.success;
      case 'Tanggal Jadian':
        return colors.secondary;
    }
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: any): void {
    let path: string;
    switch (event.tipe) {
      case 'Kencan':
        path = 'kencan';
        break;
      case 'Tanggal Jadian':
      case 'Ulang Tahun Pasangan':
        path = 'kelola';
        break;
      default:
        path = '';
    }

    this.router.navigate([path]);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
