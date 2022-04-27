import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';
import { PasanganService } from 'src/app/core/services/pasangan.service'

@Component({
  selector: 'app-pasangan-detail-form',
  templateUrl: './pasangan-detail-form.component.html',
  styleUrls: ['./pasangan-detail-form.component.scss'],
})
export class PasanganDetailFormComponent implements OnInit, OnDestroy {
  private subscriptions!: Subscription;
  public pasangan!: PasanganInterface;
  public pasanganFormDetail!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Observable<PasanganInterface>,
    private dialog: MatDialogRef<PasanganDetailFormComponent>,
    private _pasanganService: PasanganService,
    private fb: FormBuilder
  ) {
    this.subscriptions = this.data.subscribe((pasangan: PasanganInterface) => {
      console.log('data', pasangan);
      this.pasangan = pasangan;
      this.pasanganFormDetail = fb.group({
        first_name: [pasangan.first_name, [Validators.required]],
        last_name: [pasangan.last_name, [Validators.required]],
        special_name: [pasangan.special_name, [Validators.required]],
        status_pasangan_id: [
          pasangan.status_pasangan_id,
          [Validators.required],
        ],
      });
    });
  }

  ngOnInit(): void {
    this.dialog.updateSize('50%', '80%');
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ubahDataPasangan(): void {
    this.data.subscribe(console.log);
    this._pasanganService.update({...this.pasangan, ...this.pasanganFormDetail.value});

  }
}
