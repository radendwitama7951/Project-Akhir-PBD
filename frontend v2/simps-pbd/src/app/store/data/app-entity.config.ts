import { DefaultDataServiceConfig, EntityMetadataMap } from '@ngrx/data';
import { BeritaInterface } from 'src/app/core/interfaces/berita.interface';
import { KencanInterface } from 'src/app/core/interfaces/kencan.interface';
import { LaporanInterface } from 'src/app/core/interfaces/laporan.interface';
import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';
import { StatusPasanganInterface } from 'src/app/core/interfaces/status-pasangan.interface';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { environment } from 'src/environments/environment';

export const pluralNames = {
  Berita: 'berita',
  User: 'user',
  Pasangan: 'pasangan',
  Kencan: 'kencan',
  Laporan: 'laporan',
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.apiUrl,
  //  root: 'https://simps-api.herokuapp.com/api/v2/',
  timeout: 30000, // request timeout,
};

export const entityMetadata: EntityMetadataMap = {
  Berita: {
    entityName: 'Berita',
    selectId: (berita: BeritaInterface) => berita.berita_id,
    entityDispatcherOptions: {
      optimisticAdd: false,
      optimisticUpdate: true,
    },
  },
  User: {
    entityName: 'User',
    selectId: (user: UserInterface) => user.user_id || 0,
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
    },
  },
  Pasangan: {
    entityName: 'Pasangan',
    selectId: (pasangan: PasanganInterface) => pasangan.pasangan_id || 0,
    entityDispatcherOptions: {
      optimisticAdd: false,
      optimisticUpdate: true,
    },
  },
  StatusPasangan: {
    entityName: 'StatusPasangan',
    selectId: (statusPasangan: StatusPasanganInterface) =>
      statusPasangan.status_pasangan_id,
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
    },
  },
  Kencan: {
    entityName: 'Kencan',
    selectId: (kencan: KencanInterface) => kencan.kencan_id || 0,
    entityDispatcherOptions: {
      optimisticAdd: false,
      optimisticUpdate: true,
    },
  },

  Laporan: {
    entityName: 'Laporan',
    selectId: (laporan: LaporanInterface | any) => laporan.user_id || 0,
  },
};

export const appEntityConfig = {
  entityMetadata,
  pluralNames,
};
