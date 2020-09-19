import * as searchComicsActions from './search.actions';

import { ComicsState, initialState } from "../../comics/state/comics.reducer";

export function searchComicsReducer(state = initialState, action: searchComicsActions.Action): ComicsState {
  switch(action.type) {
    case searchComicsActions.SearchComicsActionTypes.GET_SEARCH_COMICS:
      return {...state, comics: action.payload};
    default:
      return state;
  }
}