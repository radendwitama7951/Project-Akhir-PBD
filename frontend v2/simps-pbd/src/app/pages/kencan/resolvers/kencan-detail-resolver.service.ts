import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';
import { PasanganService } from 'src/app/core/services/pasangan.service';

@Injectable({ providedIn: 'root' })
export class KencanDetailResolver implements Resolve<any> {
  constructor(private _pasanganService: PasanganService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PasanganInterface[]> {
    return this._pasanganService.load();
  }
}
