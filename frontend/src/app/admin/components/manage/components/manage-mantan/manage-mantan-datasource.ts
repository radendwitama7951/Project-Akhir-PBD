import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, finalize, map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject, of } from 'rxjs';
import DataMantan from './mantan.data.json';
import { MantanInterface } from '../../types/mantan.interface';
import { MantanService } from './services/mantan.service';




// TODO: replace this with real data from your application

/**
 * Data source for the ManageMantan view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ManageMantanDataSource extends DataSource<MantanInterface> {
  private dataSubject = new BehaviorSubject<MantanInterface[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(
    private mantanService: MantanService
  ) {
    super();
  }





  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(collectionViewer: CollectionViewer): Observable<MantanInterface[]> {
    return this.dataSubject.asObservable();
  };

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(collectionsViewer: CollectionViewer): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  };

  /**
   * Load This
   */
  loadMantan () {
    this.loadingSubject.next(true);
    this.mantanService.getDataMantan().pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
    .subscribe(response => this.dataSubject.next(response))
  };

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MantanInterface[]): MantanInterface[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MantanInterface[]): MantanInterface[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'nama_spesial': return compare(a.nama_spesial, b.nama_spesial, isAsc);
        case 'prioritas': return compare(+a.prioritas, +b.prioritas, isAsc);
        case 'kencan_terakhir': return compare(a.kencan_terakhir, b.kencan_terakhir, isAsc);
        default: return 0;
      }
    });
  }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
