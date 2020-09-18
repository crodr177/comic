import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";

import * as searchComicsActions from "./search.actions";
import { Comic } from '../../comics/state/comic.model';

@Injectable()
export class ComicsEffect {
  results: Comic[];
  constructor(
    private actions$: Actions,
  ) {

  }

  @Effect()
  getComics$ = this.actions$.pipe(
    ofType(searchComicsActions.SearchComicsActionTypes.GET_SEARCH_COMICS)
  )

}