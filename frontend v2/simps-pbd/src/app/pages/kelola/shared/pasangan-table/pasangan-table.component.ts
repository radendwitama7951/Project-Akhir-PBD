import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  OnInit,
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import {
  PasanganInterface,
  STATUS_PASANGAN,
} from 'src/app/core/interfaces/pasangan.interface';
import { PasanganService } from 'src/app/core/services/pasangan.service';
import { PasanganDetailFormComponent } from '../pasangan-detail-form/pasangan-detail-form.component';

@Component({
  selector: 'app-pasangan-table',
  templateUrl: './pasangan-table.component.html',
  styleUrls: ['./pasangan-table.component.scss'],
})
export class PasanganTableComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  /* @Input parameter untuk menentukan
   * ini tabel buat mantan | pacar | selingkuhan
   * */
  @Input() public statusPasangan: number | STATUS_PASANGAN = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private subscriptions: Subscription = new Subscription();
  public isHandset$!: Observable<boolean>;
  private destroyed$ = new Subject<boolean>();

  dataSource: MatTableDataSource<PasanganInterface> = new MatTableDataSource(
    []
  );
  /* @Map map status pasangan ke bentuk array
   * */
  private statusPasanganMap: string[] = ['Mantan', 'Pacar', 'Selingkuhan'];

  loading$!: Observable<boolean>;
  displayedColumns: string[] = ['special_name', 'kencan_terakhir', 'actions'];

  constructor(
    private _pasanganService: PasanganService,
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
    this.loading$ = this._pasanganService.loading$;

    // this.openDetailForm(1);
    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .pipe(map(({ matches }) => matches));
  }

  ngOnInit(): void {
    this._pasanganService.entities$
      .pipe(
        takeUntil(this.destroyed$),
        map((dataPasangan: PasanganInterface[]) => {
          return dataPasangan.filter(
            (pasangan: PasanganInterface) =>
              pasangan.status_pasangan_id == this.statusPasangan
          );
        }),
        tap(console.log)
      )
      .subscribe((dataPasangan: PasanganInterface[]) => {
        this.dataSource.data = dataPasangan;

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  public openDetailForm(
    pasanganData: PasanganInterface,
    pasangan_id?: number
  ): void {
    const dialogRef: MatDialogRef<PasanganDetailFormComponent> =
      this.dialog.open(PasanganDetailFormComponent, {
        data: pasanganData,
      });

    dialogRef.afterClosed().subscribe((value: any) => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
