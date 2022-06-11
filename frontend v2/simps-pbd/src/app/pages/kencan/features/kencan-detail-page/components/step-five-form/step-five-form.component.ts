import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  OnChanges,
  AfterViewInit,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { KencanInterface } from 'src/app/core/interfaces/kencan.interface';
import { Observable } from 'rxjs';
import { mergeMap, first } from 'rxjs/operators';
import { KencanService } from 'src/app/core/services/kencan.service';
import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';
import { PasanganService } from 'src/app/core/services/pasangan.service';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-step-five-form',
  templateUrl: './step-five-form.component.html',
  styleUrls: ['./step-five-form.component.scss'],
})
export class StepFiveFormComponent implements OnInit, OnDestroy {
  @ViewChild('kencanStatusOption', { static: false })
  public kencanStatusSelectRef!: IonSelect;
  @Input() public selectedKencanId!: string;

  @Input() public selectedKencan$!: Observable<KencanInterface>;
  public selectedPasangan$!: Observable<PasanganInterface>;
  public loading$!: Observable<boolean>;

  public statusKencanControl: FormControl = new FormControl(null);

  public opsiStatusKencan: string[] = [
    'Terjadwal',
    'Berlangsung',
    'Terlaksana',
    'Batal',
    'Menjadwalkan Ulang',
  ];

  constructor(
    private _kencanService: KencanService,
    private _pasanganService: PasanganService
  ) {}

  ngOnInit() {
    this.loading$ = this._kencanService.loading$;
    this.selectedPasangan$ = this._kencanService
      .selectEntityById(this.selectedKencanId)
      .pipe(
        first(),
        mergeMap((_) => this._pasanganService.selectEntityById(_.pasangan_id))
      );

    this.selectedKencan$.pipe(first()).subscribe((kencan: KencanInterface) => {
      this.statusKencanControl = new FormControl(kencan.status_kencan_id, [
        Validators.required,
      ]);
    });
  }

  ngOnDestroy(): void {}

  gantiStatusKencan(): void {
    this.selectedKencan$ = this._kencanService.selectEntityById(
      this.selectedKencanId
    );

    this.selectedPasangan$ = this.selectedKencan$.pipe(
      first(),
      mergeMap((_) => this._pasanganService.selectEntityById(_.pasangan_id))
    );
    this.selectedKencan$.subscribe((kencan: KencanInterface) => {
      this._kencanService.update({
        ...kencan,
        ...{ status_kencan_id: this.statusKencanControl.value },
      });
    });
  }

  openKencanStatusOption(): void {
    this.kencanStatusSelectRef.open();
  }

  getStatusKencanKeterangan(): string {
    return this.opsiStatusKencan[this.statusKencanControl.value];
  }

  compareFn(e1: number, e2: number): boolean {
    return e1 && e2 ? e1 == e2 : e1 == e2;
  }
}
