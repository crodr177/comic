import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { map } from 'rxjs/operators';

import { Store } from "@ngrx/store";

import { ComicsService } from "../comics.service";
import * as comicsActions from "./comics.actions";
import { Comic } from './comic.model';
import { mergeMap } from 'rxjs/operators';
import * as fromComics from '../state/comics.reducer';
import { mapComicData } from "../../helpers";

@Injectable()
export class ComicsEffect {
  results: Comic[];
  constructor(
    private actions$: Actions,
    private comicsService: ComicsService,
    private store: Store<fromComics.ComicsState>
  ) {

  }

  @Effect()
  getComics$ = this.actions$.pipe(
    ofType(comicsActions.ComicsActionTypes.GET_COMICS),
    mergeMap((action) => this.comicsService.getComics()
    .pipe(
      map(data => {
        return this.store.dispatch(new comicsActions.GetComics(mapComicData(data['comics'])));
      })),
  ))

}
