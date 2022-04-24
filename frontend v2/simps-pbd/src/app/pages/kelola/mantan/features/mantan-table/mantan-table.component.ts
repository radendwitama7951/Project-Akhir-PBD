import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  EntityCollectionDataService,
  EntityCollectionService,
  EntityServices,
} from '@ngrx/data';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';

@Component({
  selector: 'app-mantan-table',
  templateUrl: './mantan-table.component.html',
  styleUrls: ['./mantan-table.component.scss'],
})
export class MantanTableComponent {
  private mantanService: EntityCollectionService<PasanganInterface>;
  mantan$!: Observable<PasanganInterface>;
  loading$!: Observable<boolean>;
  private subscriptions!: Subscription;
  displayedColumns: string[] = ['special_name', 'kencan_terakhir', 'actions'];

  dataSource: MatTableDataSource<PasanganInterface> = new MatTableDataSource(
    []
  );

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private entityServices: EntityServices) {
    // Create 100 users
    this.mantanService =
      this.entityServices.getEntityCollectionService('Pasangan');
    this.loading$ = this.mantanService.loading$;

    // Assign the data to the data source for the table to render
    this.subscriptions = this.mantanService
      .getAll()
      .pipe(
        map((dataPasangan: PasanganInterface[]) =>
          dataPasangan.filter(
            (pasangan: PasanganInterface) => pasangan.id_status == 0
          )
        )
      )
      .subscribe((dataPasangan: PasanganInterface[]) => {
        this.dataSource.data = dataPasangan;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngOnDestroy(): void {
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
