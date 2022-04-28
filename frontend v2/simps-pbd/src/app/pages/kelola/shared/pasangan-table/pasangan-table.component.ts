import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
export class PasanganTableComponent implements AfterViewInit {
  /* @Input parameter untuk menentukan
   * ini tabel buat mantan | pacar | selingkuhan
   * */
  @Input() public statusPasangan: number | STATUS_PASANGAN = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private subscriptions!: Subscription;
  private isHandset$!: Observable<boolean>;

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
    this.subscriptions = this._pasanganService.entities$
      .pipe(
        map((dataPasangan: PasanganInterface[]) => {
          return dataPasangan.filter(
            (pasangan: PasanganInterface) =>
              pasangan.status_pasangan_id == this.statusPasangan
          );
        }),
        tap((dataPasangan: PasanganInterface[]) => {})
      )
      .subscribe(
        (dataPasangan: PasanganInterface[]) => {
          this.dataSource.data = dataPasangan;
          setTimeout(() => {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }, 100);
        },
        () => {}
      );

    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Handset])
      .pipe(map(({ matches }) => matches));
  }

  ngAfterViewInit(): void {
    // Panggil Store Service
  }

  public openDetailForm(pasangan_id: number): void {
    let data: Observable<PasanganInterface> =
      this._pasanganService.selectEntityById(pasangan_id);
    const dialogRef: MatDialogRef<PasanganDetailFormComponent> =
      this.dialog.open(PasanganDetailFormComponent, {
        data: data,
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
