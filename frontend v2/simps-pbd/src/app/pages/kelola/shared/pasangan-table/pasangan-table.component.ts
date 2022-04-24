import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  PasanganInterface,
  STATUS_PASANGAN,
} from 'src/app/core/interfaces/pasangan.interface';

@Component({
  selector: 'app-pasangan-table',
  templateUrl: './pasangan-table.component.html',
  styleUrls: ['./pasangan-table.component.scss'],
})
export class PasanganTableComponent {
  /* @Input parameter untuk menentukan
   * ini tabel buat mantan | pacar | selingkuhan
   * */
  @Input() public statusPasangan: STATUS_PASANGAN = 0;

  /* @Map map status pasangan ke bentuk array
   * */
  private statusPasanganMap: string[] = ['Mantan', 'Pacar', 'Selingkuhan'];

  private pasanganService: EntityCollectionService<PasanganInterface>;
  pasangan$!: Observable<PasanganInterface>;
  loading$!: Observable<boolean>;
  displayedColumns: string[] = ['special_name', 'kencan_terakhir', 'actions'];

  dataSource: MatTableDataSource<PasanganInterface> = new MatTableDataSource(
    []
  );

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private entityServices: EntityServices) {
    console.log(this.statusPasangan[this.statusPasangan]);
    // Panggil Store Service
    this.pasanganService =
      this.entityServices.getEntityCollectionService('Pasangan');
    this.loading$ = this.pasanganService.loading$;

    // Connect
    this.pasanganService
      .getAll()
      .pipe(
        map((dataPasangan: PasanganInterface[]) =>
          dataPasangan.filter(
            (pasangan: PasanganInterface) =>
              pasangan.id_status == this.statusPasangan
          )
        )
      )
      .subscribe((dataPasangan: PasanganInterface[]) => {
        this.dataSource.data = dataPasangan;
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
