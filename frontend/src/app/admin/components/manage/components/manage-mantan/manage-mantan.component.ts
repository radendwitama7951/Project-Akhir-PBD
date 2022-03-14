import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { catchError, debounceTime, distinctUntilChanged, fromEvent, map, merge, Observable, tap, throwError } from 'rxjs';
import { MantanInterface } from '../../types/mantan.interface';
import { ManageMantanDataSource } from './manage-mantan-datasource';
import DataMantan from './mantan.data.json';
import { MantanService } from './services/mantan.service';

@Component({
  selector: 'app-manage-mantan',
  templateUrl: './manage-mantan.component.html',
  styleUrls: ['./manage-mantan.component.scss'],
  providers: [MantanService]
})
export class ManageMantanComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('input') input!: ElementRef;
  @ViewChild(MatTable) table!: MatTable<MantanInterface>;
  dataSource!: ManageMantanDataSource;



  
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['prioritas', 'nama_spesial', 'kencan_terakhir', 'detail'];
  
  constructor(
    private mantanService: MantanService
    ) { };
   
  ngOnInit(): void {
    this.dataSource = new ManageMantanDataSource(this.mantanService);
    this.dataSource.loadMantan();
  }


  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
    .pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(() => {
        this.paginator.pageIndex = 0;
        this.loadMantanTable();
      })
    )
    .subscribe();


    // Reset paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // on sort
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadMantanTable())
      )
      .subscribe();
  }

  loadMantanTable (): void {
    this.dataSource.loadMantan()
  };
}




