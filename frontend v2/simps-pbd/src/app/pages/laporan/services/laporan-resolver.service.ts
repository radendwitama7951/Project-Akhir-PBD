import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { LaporanInterface } from 'src/app/core/interfaces/laporan.interface';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LaporanService } from 'src/app/core/services/laporan.service';

@Injectable({ providedIn: 'root' })
export class LaporanResolverService
  implements Resolve<Observable<LaporanInterface[]>>
{
  constructor(private _laporanService: LaporanService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<LaporanInterface[]> {
    return this._laporanService.getAll();
  }
}
