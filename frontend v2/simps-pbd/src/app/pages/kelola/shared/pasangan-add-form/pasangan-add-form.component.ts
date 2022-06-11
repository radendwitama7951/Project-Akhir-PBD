import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {
  PasanganInterface,
  STATUS_PASANGAN,
} from 'src/app/core/interfaces/pasangan.interface';
import { PasanganService } from 'src/app/core/services/pasangan.service';

@Component({
  selector: 'app-pasangan-add-form',
  templateUrl: './pasangan-add-form.component.html',
  styleUrls: ['./pasangan-add-form.component.scss'],
})
export class PasanganAddFormComponent implements OnInit, OnDestroy {
  @Input() public defaultStatus?: number;
  private subscriptions: Subscription = new Subscription();
  private statusPasanganOptions: string[] = ['mantan', 'pacar', 'selingkuhan'];
  private defaultAvatar: string =
    'https://www.petwellnessaz.com/wp-content/uploads/2020/07/blank-profile-picture-973460_640-300x300-1-300x300.png';
  public pasangan!: PasanganInterface;
  public pasanganFormDetail: FormGroup = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    special_name: ['', [Validators.required]],
    status_pasangan_id: [this.data, [Validators.required]],
    avatar: [this.defaultAvatar, [Validators.required]],
    ulang_tahun: [''],
    tanggal_jadian: [''],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: STATUS_PASANGAN,
    private dialog: MatDialogRef<PasanganAddFormComponent>,
    private _pasanganService: PasanganService,
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.breakpointObserver
        .observe([Breakpoints.Small, Breakpoints.Handset])
        .subscribe(({ matches }) => {
          if (matches) this.dialog.updateSize('200%', '80%');
          else this.dialog.updateSize('50%', '80%');
        })
    );
  }

  ngOnDestroy(): void {}

  tambahDataPasangan(): void {
    this._pasanganService.post(this.pasanganFormDetail.value);
    this.dialog.close();
  }
}
