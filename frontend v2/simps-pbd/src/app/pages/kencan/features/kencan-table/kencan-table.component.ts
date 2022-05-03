import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  KencanInterface,
  STATUS_KENCAN,
} from 'src/app/core/interfaces/kencan.interface';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { KencanService } from 'src/app/core/services/kencan.service';
import { PasanganService } from 'src/app/core/services/pasangan.service';
import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kencan-table',
  templateUrl: './kencan-table.component.html',
  styleUrls: ['./kencan-table.component.scss'],
})
export class KencanTableComponent implements OnInit, OnDestroy {
  /* @Entity config
   * */
  private subscriptions!: Subscription;
  public loading$!: Observable<boolean>;
  public isHandset$: Observable<boolean>;

  displayedColumns: string[] = ['tanggal', 'pasangan', 'tempat', 'actions'];
  dataSource: MatTableDataSource<KencanInterface> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _kencanService: KencanService,
    public _pasanganService: PasanganService,
    private breakpointObserver: BreakpointObserver,
    public router: Router
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

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openKencanDetail(kencanId: number): void {
    this.router.navigate(['kencan', kencanId]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
