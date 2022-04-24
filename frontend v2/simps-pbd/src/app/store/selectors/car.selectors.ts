import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

import { selectRouteParams } from './router.selectors';
import { carAdapter, CarState } from '../reducers/car.reducer';

export const carsFeatureSelector = createFeatureSelector<CarState>('cars');

const { selectEntities, selectAll } = carAdapter.getSelectors();

export const selectCarEntities = createSelector(
  carsFeatureSelector,
  selectEntities
);

export const selectCars = createSelector(carsFeatureSelector, selectAll);

export const selectCar = createSelector(
  selectCarEntities,
  selectRouteParams,
  (cars, { carId }) => cars[carId]
);
