import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  KencanInterface,
  STATUS_KENCAN,
} from 'src/app/core/interfaces/kencan.interface';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { map, takeUntil } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-kencan-table',
  templateUrl: './kencan-table.component.html',
  styleUrls: ['./kencan-table.component.scss'],
})
export class KencanTableComponent {
  /* @Entity config
   * */
  private kencanService!: EntityCollectionService<KencanInterface>;
  private subscriptions!: Subscription;

  displayedColumns: string[] = ['tanggal', 'id_pasangan', 'tempat', 'actions'];
  dataSource: MatTableDataSource<KencanInterface> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(entityServices: EntityServices) {
    this.kencanService = entityServices.getEntityCollectionService('Kencan');
    this.subscriptions = this.kencanService
      .getAll()
      .pipe(
        map((dataKencan: KencanInterface[]) =>
          dataKencan.filter(
            (kencan: KencanInterface) =>
              kencan.status == STATUS_KENCAN.TERJADWAL
          )
        )
      )
      .subscribe((dataKencan: KencanInterface[]) => {
        // Assign the data to the data source for the table to render
        this.dataSource.data = dataKencan;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
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
