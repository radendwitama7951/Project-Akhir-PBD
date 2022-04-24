import { createAction } from '@ngrx/store';

const storeName: string = '[Counter] ';
export const increment = createAction(storeName + 'Increment');
export const decrement = createAction(storeName + 'Decrement');
export const reset = createAction(storeName + 'Reset');
