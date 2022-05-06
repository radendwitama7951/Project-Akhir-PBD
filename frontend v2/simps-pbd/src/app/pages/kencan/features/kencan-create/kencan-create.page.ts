import { Component, OnDestroy, OnInit } from '@angular/core';
import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { KencanService } from 'src/app/core/services/kencan.service';
import { PasanganService } from 'src/app/core/services/pasangan.service';
import { parseISO, format } from 'date-fns';
import * as moment from 'moment';
import { StepperOrientation } from '@angular/cdk/stepper';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-kencan-create',
  templateUrl: './kencan-create.page.html',
  styleUrls: ['./kencan-create.page.scss'],
})
export class KencanCreatePage implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  public selectedPasangan$: Observable<PasanganInterface>;
  public dataPasangan$!: Observable<PasanganInterface[]>;
  public stepperOrientation$!: Observable<StepperOrientation>;
  public selectedPasanganId!: string;
  public minDate = moment().format();

  public createKencanForm!: FormGroup;
  constructor(
    private _pasanganService: PasanganService,
    public _kencanService: KencanService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation$ = breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.Small])
      .pipe(map(({ matches }) => (matches ? 'vertical' : 'horizontal')));
  }

  ngOnInit(): void {
    this.selectedPasanganId =
      this.activatedRoute.snapshot.paramMap.get('pasanganId');

    this.dataPasangan$ = this._pasanganService.entities$;

    this.selectedPasangan$ = this._pasanganService.selectEntityById(
      this.selectedPasanganId
    );

    this.subscriptions.add(
      this.selectedPasangan$.subscribe((pasangan: PasanganInterface) => {
        this.createKencanForm = this.fb.group({
          tanggal: ['', [Validators.required]],
          jam: ['', [Validators.required]],
          tempat: ['', [Validators.required]],
          pasangan_id: [pasangan.pasangan_id, [Validators.required]],
          biaya: [0, [Validators.required]],
          status_kencan_id: [0, [Validators.required]],
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this._kencanService.load();
  }

  gantiPasanganKencan(): void {
    this.selectedPasangan$ = this._pasanganService.selectEntityById(
      this.createKencanForm.controls['pasangan_id'].value
    );
  }

  gantiWaktuKencan(datetime: string): void {
    console.log(datetime);
    this.createKencanForm.patchValue({
      tanggal: this.formatDate(datetime),
      jam: this.formatTime(datetime),
    });
    console.log(this.createKencanForm.controls['tanggal'].value);

    console.log(this.createKencanForm.controls['jam'].value);
  }

  createKencan(): void {
    this._kencanService.add(this.createKencanForm.value);

    this.router.navigate(['kencan/']);
  }

  compareFn(e1: number, e2: number): boolean {
    return e1 && e2 ? e1 == e2 : e1 == e2;
  }

  formatDate(value: string) {
    return format(parseISO(value), 'yyyy-MM-dd');
  }

  formatTime(value: string) {
    return format(parseISO(value), 'HH:mm:ss');
  }
}
