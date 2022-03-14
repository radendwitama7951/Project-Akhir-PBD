import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ManageSelingkuhanDataSource, ManageSelingkuhanItem } from './manage-selingkuhan-datasource';

@Component({
  selector: 'app-manage-selingkuhan',
  templateUrl: './manage-selingkuhan.component.html',
  styleUrls: ['./manage-selingkuhan.component.scss']
})
export class ManageSelingkuhanComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ManageSelingkuhanItem>;
  dataSource: ManageSelingkuhanDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new ManageSelingkuhanDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
