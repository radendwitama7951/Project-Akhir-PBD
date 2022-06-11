import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EntityCollection } from '@ngrx/data';
import { Observable, Subscription } from 'rxjs';
import { switchMap, mergeMap, first } from 'rxjs/operators';
import { KencanInterface } from 'src/app/core/interfaces/kencan.interface';

import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';
import { KencanService } from 'src/app/core/services/kencan.service';
import { PasanganService } from 'src/app/core/services/pasangan.service';

@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrls: ['./step-one-form.component.scss'],
})
export class StepOneFormComponent implements OnInit {
  @Input() public selectedKencanId?: string;
  public pasanganList$!: Observable<PasanganInterface[]>;
  public selectedPasangan$!: Observable<PasanganInterface>;
  public selectedKencan$!: Observable<KencanInterface>;
  public loading$!: Observable<boolean>;
  public pasanganIdControl: FormControl = new FormControl(null);
  constructor(
    private _pasanganService: PasanganService,
    private _kencanService: KencanService
  ) {}

  ngOnInit(): void {
    this.pasanganList$ = this._pasanganService.entities$;
    this.loading$ = this._kencanService.loading$;
    this.selectedKencan$ = this._kencanService.selectEntityById(
      this.selectedKencanId
    );

    this.selectedPasangan$ = this.selectedKencan$.pipe(
      mergeMap((kencan) =>
        this._pasanganService.selectEntityById(kencan.pasangan_id)
      )
    );

    this.selectedKencan$.subscribe(({ pasangan_id }) => {
      this.selectedPasangan$ = this._pasanganService.selectEntityById(
        pasangan_id as number
      );

      this.pasanganIdControl = new FormControl(pasangan_id, [
        Validators.required,
      ]);
    });
  }

  updateSelectedKencan(): void {
    this.selectedKencan$ = this._kencanService.selectEntityById(
      this.selectedKencanId
    );

    let updatePasanganKencan: any = {
      pasangan_id: this.pasanganIdControl.value,
    };

    let subscriptions: Subscription = this.selectedKencan$
      .pipe(first())
      .subscribe((kencan: KencanInterface) => {
        updatePasanganKencan = { ...kencan, ...updatePasanganKencan };
        this._kencanService.update(updatePasanganKencan);
        this.selectedPasangan$ = this._pasanganService.selectEntityById(
          updatePasanganKencan.pasangan_id
        );
      });
  }

  compareFn(e1: number, e2: number): boolean {
    return e1 && e2 ? e1 == e2 : e1 == e2;
  }
}
