import { STATUS_ENUM } from "./status.enum";

export interface MantanInterface {
    id: number;
    status: STATUS_ENUM | undefined;
    prioritas: number;
    nama_depan: string | undefined;
    nama_belakang: string | undefined;
    nama_spesial: string | number;
    asal: string | undefined;
    umur: number | undefined;
    ulang_tahun: string | undefined;
    nomor_hp: string | undefined;
    kencan_terakhir: string;
    keyword: string | undefined;
    ig: string | undefined;
};


