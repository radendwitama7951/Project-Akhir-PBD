import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Observer, Subscription } from 'rxjs';
import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';
import { PasanganService } from 'src/app/core/services/pasangan.service';

@Component({
  selector: 'app-pasangan-detail-form',
  templateUrl: './pasangan-detail-form.component.html',
  styleUrls: ['./pasangan-detail-form.component.scss'],
})
export class PasanganDetailFormComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  public pasangan!: PasanganInterface;
  public pasanganFormDetail!: FormGroup;
  public statusPasangan!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Observable<PasanganInterface>,
    private dialog: MatDialogRef<PasanganDetailFormComponent>,
    private _pasanganService: PasanganService,
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) {
    this.subscriptions = this.data.subscribe((pasangan: PasanganInterface) => {
      this.pasangan = pasangan;
      this.statusPasangan = pasangan.status_pasangan;
      this.pasanganFormDetail = fb.group({
        first_name: [pasangan.first_name, [Validators.required]],
        last_name: [pasangan.last_name, [Validators.required]],
        special_name: [pasangan.special_name, [Validators.required]],
        avatar: [pasangan.avatar, [Validators.required]],
        status_pasangan_id: [
          pasangan.status_pasangan_id,
          [Validators.required],
        ],
      });
    });
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.breakpointObserver
        .observe([Breakpoints.Small, Breakpoints.Handset])
        .subscribe(({ matches }) => {
          console.log(matches);
          if (matches) this.dialog.updateSize('200%', '80%');
          else this.dialog.updateSize('50%', '80%');
        })
    );
    console.log('==>', this.statusPasangan);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ubahDataPasangan(): void {
    this._pasanganService.update({
      ...this.pasangan,
      ...this.pasanganFormDetail.value,
    });
    this.statusPasangan = this.getStatusPasangan();
  }

  getStatusPasangan(): string {
    return this._pasanganService.getStatusPasangan(
      this.pasanganFormDetail.controls['status_pasangan_id'].value
    );
  }
}
