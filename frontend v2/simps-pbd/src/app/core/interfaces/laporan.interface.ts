import { PasanganInterface } from './pasangan.interface';
export interface LaporanInterface {
  readonly user_id?: number;
  from_tanggal?: Date | string;
  to_tanggal?: Date | string;
  pengeluaran?: { biaya: number[]; tanggal: Date[] | string[] } | any;
  rasio_pasangan_kencan?:
    | { status_pasangan: string[]; total_kencan: number[] }
    | any;
  pasangan_kencan_teratas?: PasanganInterface[] | any;
}
