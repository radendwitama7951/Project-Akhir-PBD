import { createAction, props } from '@ngrx/store';
import { CarInterface } from '../reducers/car.reducer';

const stateClassname = '[App]';
export const appInit = createAction(
  stateClassname + 'Init',
  props<{ cars: CarInterface[] }>()
);
