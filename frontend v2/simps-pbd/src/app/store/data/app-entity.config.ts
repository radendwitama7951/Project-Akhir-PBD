import { DefaultDataServiceConfig, EntityMetadataMap } from '@ngrx/data';
import { BeritaInterface } from 'src/app/core/interfaces/berita.interface';
import { KencanInterface } from 'src/app/core/interfaces/kencan.interface';
import { PasanganInterface } from 'src/app/core/interfaces/pasangan.interface';
import { StatusPasanganInterface } from 'src/app/core/interfaces/status-pasangan.interface';
import { UserInterface } from 'src/app/core/interfaces/user.interface';

export const pluralNames = {
  Berita: 'berita/all',
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://sanidatuhealthstore-backend-v1.herokuapp.com/api',
  timeout: 5000, // request timeout
};

export const appEntityMetadata: EntityMetadataMap = {
  Berita: {
    entityName: 'Berita',
    selectId: (berita: BeritaInterface) => berita.id_berita,
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
    },
  },
  User: {
    entityName: 'User',
    selectId: (user: UserInterface) => user.id_user,
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
    },
  },
  Pasangan: {
    entityName: 'Pasangan',
    selectId: (pasangan: PasanganInterface) => pasangan.id_pasangan,
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
    },
  },
  StatusPasangan: {
    entityName: 'StatusPasangan',
    selectId: (statusPasangan: StatusPasanganInterface) =>
      statusPasangan.id_status,
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
    },
  },
  Kencan: {
    entityName: 'Kencan',
    selectId: (kencan: KencanInterface) => kencan.id_kencan,
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
    },
  },
};

export const appEntityConfig = {
  appEntityMetadata,
  pluralNames,
};
