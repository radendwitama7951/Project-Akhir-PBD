import { createAction } from '@ngrx/store';

const actionLabel: string = '[Berita-API] ';
export const loadBerita = createAction(actionLabel + 'Load');
export const loadBeritaSuccess = createAction(actionLabel + 'Success');
export const loadBeritaFail = createAction(actionLabel + 'Fail');
