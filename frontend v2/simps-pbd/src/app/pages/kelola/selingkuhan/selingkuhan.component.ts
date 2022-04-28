import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { STATUS_PASANGAN } from 'src/app/core/interfaces/pasangan.interface';
import { PasanganAddFormComponent } from '../shared/pasangan-add-form/pasangan-add-form.component';

@Component({
  selector: 'app-selingkuhan',
  templateUrl: './selingkuhan.component.html',
  styleUrls: ['./selingkuhan.component.scss'],
})
export class SelingkuhanComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
