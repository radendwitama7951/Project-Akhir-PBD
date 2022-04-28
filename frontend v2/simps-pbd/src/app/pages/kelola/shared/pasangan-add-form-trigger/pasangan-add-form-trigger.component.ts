import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { STATUS_PASANGAN } from 'src/app/core/interfaces/pasangan.interface';
import { PasanganAddFormComponent } from '../pasangan-add-form/pasangan-add-form.component';

@Component({
  selector: 'app-pasangan-add-form-trigger',
  templateUrl: './pasangan-add-form-trigger.component.html',
  styleUrls: ['./pasangan-add-form-trigger.component.scss'],
})
export class PasanganAddFormTriggerComponent {
  @Input() public defaultStatus: STATUS_PASANGAN = STATUS_PASANGAN.PACAR;
  @Input() public triggerDescription: string = 'Tambah Pasangan';

  constructor(private dialog: MatDialog) {}

  openFormAddPasangan(): void {
    let dialogRef: MatDialogRef<PasanganAddFormComponent> = this.dialog.open(
      PasanganAddFormComponent,
      {
        data: this.defaultStatus,
      }
    );
  }
}
