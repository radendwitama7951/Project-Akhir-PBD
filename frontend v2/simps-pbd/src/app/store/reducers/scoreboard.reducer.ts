import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';

import { GameInterface } from 'src/app/core/interfaces/game.interface';
import * as ScoreboardPageActions from 'src/app/store/actions/scoreboard-page.actions';

export const scoreboardFeatureKey: string = 'game';

export interface State {
  home: number;
  away: number;
}

export const initialState: GameInterface = {
  home: 0,
  away: 0,
};

export const scoreboardReducer = createReducer(
  initialState,
  on(ScoreboardPageActions.homeScore, (state: GameInterface) => ({
    ...state,
    home: state.home + 1,
  })),
  on(ScoreboardPageActions.awayScore, (state: GameInterface) => ({
    ...state,
    away: state.away + 1,
  })),
  on(ScoreboardPageActions.resetScore, (state: GameInterface) => ({
    home: 0,
    away: 0,
  })),
  on(ScoreboardPageActions.setScore, (state: GameInterface, { game }) => ({
    home: game.home,
    away: game.away,
  }))
);
