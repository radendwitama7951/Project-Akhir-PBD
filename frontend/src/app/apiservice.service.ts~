import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  // connect frontend dengan backend

  apiUrl = "http://localhost:3000/anggota";

  // GET semua data
  getAllData (): Observable<any>
  {
	  return this._http.get(`${this.apiUrl}`);
  };

  // CREATE data baru
  createData (data: any): Observable<any> {
	  return this._http.post(`${this.apiUrl}`, data);
  };

}
