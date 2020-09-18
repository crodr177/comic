import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";

import { ComicsService } from "../comics.service";
import * as comicsActions from "./comics.actions";
import { Comic } from './comic.model';

@Injectable()
export class ComicsEffect {
  results: Comic[];
  constructor(
    private actions$: Actions,
    private comicsService: ComicsService,
  ) {

  }

  @Effect()
  getComics$ = this.actions$.pipe(
    ofType(comicsActions.ComicsActionTypes.GET_COMICS)
  )

}
