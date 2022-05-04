import { Observable } from 'rxjs';
import { PasanganInterface } from './pasangan.interface';

export enum STATUS_KENCAN {
  TERJADWAL = 0,
  BERLANGSUNG,
  TERLAKSANA,
  BATAL,
  MENJADWALKAN_ULANG,
}

export class KencanInterface {
  readonly kencan_id?: number;
  tanggal: string;
  jam: string;
  tempat: string;
  pasangan_id?: string | number;
  readonly pasangan?: string;
  biaya: number;
  status_kencan_id?: number | STATUS_KENCAN;
  readonly status_kencan?: string;
}
