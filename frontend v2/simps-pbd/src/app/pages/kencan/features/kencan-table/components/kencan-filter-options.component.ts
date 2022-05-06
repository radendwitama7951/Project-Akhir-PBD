import { formatDate } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface FilterConfigInterface {
  search_term?: string;
  search_tanggal: boolean | true;
  search_nama: boolean | true;
  search_tempat: boolean | true;
  from_tanggal?: string;
  to_tanggal?: string;
}

@Component({
  templateUrl: './kencan-filter-options.component.html',
  styleUrls: ['./kencan-filter-options.component.scss'],
})
export class KencanFilterOptions {
  public filterOptions: string[] = ['Tanggal', 'Nama lengkap', 'tempat'];

  public kencanFilterForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: FilterConfigInterface,
    private fb: FormBuilder
  ) {
    this.kencanFilterForm = fb.group({
      search_term: [data?.search_term],
      search_nama: [data?.search_nama],
      search_tanggal: [data?.search_tanggal],
      search_tempat: [data?.search_tempat],
      from_tanggal: [data?.from_tanggal],
      to_tanggal: [data?.to_tanggal],
    });
  }

  simpanFilterKencan(): any {
    return {
      ...this.kencanFilterForm.value,
      ...{
        from_tanggal: this.formatDate(
          new Date(this.kencanFilterForm.controls['from_tanggal'].value)
        ),
        to_tanggal: this.formatDate(
          new Date(this.kencanFilterForm.controls['to_tanggal'].value)
        ),
      },
    };
  }

  private formatDate(date: Date): string {
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    let year = date.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }
}
