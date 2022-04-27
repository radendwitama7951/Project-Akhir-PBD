import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-kencan-table',
  templateUrl: './kencan-table.component.html',
  styleUrls: ['./kencan-table.component.scss'],
})
export class KencanTableComponent {
  /* @Entity config
   * */
  private subscriptions!: Subscription;
  public loading$!: Observable<boolean>;

  displayedColumns: string[] = ['tanggal', 'pasangan', 'tempat', 'actions'];
  dataSource: MatTableDataSource<KencanInterface> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _kencanService: KencanService,
    public _pasanganService: PasanganService
  ) {
    this.subscriptions = this._kencanService
      .getAll()
      .subscribe((dataKencan: KencanInterface[]) => {
        console.log(dataKencan);
        // Assign the data to the data source for the table to render
        this.dataSource.data = dataKencan;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

    this.loading$ = this._kencanService.loading$;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
