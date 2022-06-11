/* @Enum type parameter jenis tabel
 * */
export enum STATUS_PASANGAN {
  MANTAN = 0,
  PACAR,
  SELINGKUHAN,
}

export class PasanganInterface {
  readonly pasangan_id?: number;
  first_name: string;
  last_name: string;
  special_name: string;
  avatar: string;
  ulang_tahun?: string | Date;
  tanggal_jadian?: string | Date;
  readonly kencan_terakhir: string;
  status_pasangan_id?: number | STATUS_PASANGAN;
  status_pasangan?: string;

  total_kencan?: number;
}
