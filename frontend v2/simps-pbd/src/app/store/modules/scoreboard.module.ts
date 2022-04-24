import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  scoreboardFeatureKey,
  scoreboardReducer,
} from '../reducers/scoreboard.reducer';

@NgModule({
  imports: [StoreModule.forFeature(scoreboardFeatureKey, scoreboardReducer)],
})
export class ScoreboardModule {}
