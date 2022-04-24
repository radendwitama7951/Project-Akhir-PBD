export enum STATUS_KENCAN {
  TERJADWAL,
  BERLANGSUNG,
  BATAL,
  SELESAI,
}

export interface KencanInterface {
  id_kencan: number;
  tanggal: string;
  jam: string;
  tempat: string;
  id_pasangan: number;
  biaya: number;
  status: number | STATUS_KENCAN;
}
