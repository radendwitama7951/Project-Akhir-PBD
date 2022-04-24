import { createAction, props } from '@ngrx/store';
import { GameInterface } from '../interfaces/game.interface';

const actionName: string = '[Scoreboard Page] ';
export const homeScore = createAction(actionName + 'Home Score');
export const awayScore = createAction(actionName + 'Away Score');
export const resetScore = createAction(actionName + 'Score Reset');
export const setScore = createAction(
  actionName + 'Set Score',
  props<{ game: GameInterface }>()
);
