import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { appInit } from '../actions/car.actions';

export interface CarInterface {
  id: string;
  year: string;
  make: string;
  model: string;
}

export type CarState = EntityState<CarInterface>;

export const carAdapter = createEntityAdapter<CarInterface>({
  selectId: (car: CarInterface) => car.id,
});

const initialState = carAdapter.getInitialState();

export const carReducer = createReducer<CarState>(
  initialState,
  on(appInit, (state, { cars }) => carAdapter.addMany(cars, state))
);
