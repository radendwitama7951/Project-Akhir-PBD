import {
  AfterViewInit,
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { KencanInterface } from 'src/app/core/interfaces/kencan.interface';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs/operators';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { KencanService } from 'src/app/core/services/kencan.service';
import { PasanganService } from 'src/app/core/services/pasangan.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  FilterConfigInterface,
  KencanFilterOptions,
} from './components/kencan-filter-options.component';
import { QueryParams } from '@ngrx/data';

@Component({
  selector: 'app-kencan-table',
  templateUrl: './kencan-table.component.html',
  styleUrls: ['./kencan-table.component.scss'],
})
export class KencanTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('searchInput') input: ElementRef;

  private subscriptions!: Subscription;
  public loading$!: Observable<boolean>;
  public isHandset$: Observable<boolean>;
  private filterConfig: FilterConfigInterface = {
    search_term: '',
    search_nama: true,
    search_tempat: true,
    search_tanggal: true,
    from_tanggal: this.formatDate(new Date(Date.now())),
    to_tanggal: new Date().getFullYear() + '-12-31',
  };

  private terms$!: Observable<any>;
  displayedColumns: string[] = ['tanggal', 'pasangan', 'tempat', 'actions'];
  dataSource: MatTableDataSource<KencanInterface> = new MatTableDataSource([]);

  constructor(
    private _kencanService: KencanService,
    public _pasanganService: PasanganService,
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    private dialog: MatDialog
  ) {
    this.subscriptions = this._kencanService.entities$.subscribe(
      (dataKencan: KencanInterface[]) => {
        // Assign the data to the data source for the table to render
        this.dataSource.data = dataKencan;
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, 100);
      }
    );

    this.loading$ = this._kencanService.loading$;

    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .pipe(map(({ matches }) => matches));
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.terms$ = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      startWith(''),
      debounceTime(400),
      distinctUntilChanged()
    );

    this.subscriptions.add(
      this.terms$.subscribe((term: string) => {
        this.filterConfig = {
          ...this.filterConfig,
          ...{ search_term: term },
        };
        this._kencanService
          .getWithQuery(this.filterConfig as unknown as QueryParams)
          .subscribe((filteredResponse: KencanInterface[]) => {
            this.dataSource.data = filteredResponse;

            if (this.dataSource.paginator) {
              this.dataSource.paginator.firstPage();
            }
          });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openKencanDetail(kencanId: number): void {
    this.router.navigate(['kencan', kencanId]);
  }

  openFilterOptions(): void {
    const dialogRef: MatDialogRef<KencanFilterOptions> = this.dialog.open(
      KencanFilterOptions,
      {
        data: this.filterConfig,
      }
    );

    dialogRef
      .afterClosed()
      .subscribe((filterConfigRes: FilterConfigInterface | any) => {
        if (!filterConfigRes) return;
        this.filterConfig = filterConfigRes;
        this._kencanService
          .getWithQuery(this.filterConfig as unknown as QueryParams)
          .subscribe((res: KencanInterface[]) => (this.dataSource.data = res));
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private formatDate(date: Date): string {
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    let year = date.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }
}
