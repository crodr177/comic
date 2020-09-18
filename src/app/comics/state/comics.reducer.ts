import * as comicsActions from './comics.actions';
import { Comic } from './comic.model';
import * as fromRoot from '../../state/app-state';

export interface ComicsState {
  comics: Comic[],
}

export interface AppState extends fromRoot.AppState {
  comics: ComicsState
}

export const initialState: ComicsState = {
  comics: []
}

export function comicsReducer(state = initialState, action: comicsActions.Action): ComicsState {
  switch(action.type) {
    case comicsActions.ComicsActionTypes.GET_COMICS:
      return {...state, comics: action.payload}
    default:
      return state;
  }
}
