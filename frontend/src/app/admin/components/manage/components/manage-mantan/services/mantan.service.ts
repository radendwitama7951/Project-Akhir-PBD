import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { MantanInterface } from '../../../types/mantan.interface';

@Injectable()
export class MantanService {
  private dataMantanUrl: string = '/api/admin/manage/mantan'; 


  public getDataMantan (): Observable<any> {
    return this.http.get<any>(this.dataMantanUrl).pipe(
      map( (response) => {
        // console.log(response.data);
        return response.data as MantanInterface[];
      } )
    );
  };

  public showDataMantan (): void {
    this.getDataMantan()
      .subscribe(mantan => {
        console.log(mantan);
      });

  };

  public getMantanById (): Observable<any> {
    return this.http.get<MantanInterface>(this.dataMantanUrl.concat('/1'))
      .pipe(
        tap( _ => console.log('Mantan fetched id 1 !'))
      );
  };


  constructor(
    private http: HttpClient
  ) {
  }
}
