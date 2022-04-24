/* @Enum type parameter jenis tabel
 * */
export enum STATUS_PASANGAN {
  MANTAN = 0,
  PACAR,
  SELINGKUHAN,
}

export interface PasanganInterface {
  id_pasangan: number;
  first_name: string;
  last_name: string;
  special_name: string;
  avatar: string;
  kencan_terakhir: string;
  id_status: number | STATUS_PASANGAN;
}
