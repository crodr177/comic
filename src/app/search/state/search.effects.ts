import { Injectable } from "@angular/core";

import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap } from 'rxjs/operators';

import * as searchComicsActions from "./search.actions";
import { SearchService } from "../search.service";
import * as fromComics from "../../comics/state/comics.reducer";
import { mapComicData } from 'src/app/helpers';

@Injectable()
export class ComicsEffect {
  title;
  constructor(
    private actions$: Actions,
    private searchService: SearchService,
    private store: Store<fromComics.ComicsState>
  ) {

  }

  @Effect()
  getSearchComics$ = this.actions$.pipe(
    ofType(searchComicsActions.SearchComicsActionTypes.GET_SEARCH_COMICS),
    mergeMap((action) => this.searchService.getSearchComics(this.title)
    .pipe(
      map(data => {
        return this.store.dispatch(new searchComicsActions.GetSearchComics(mapComicData(data['comics'])));
      })),
  ));

}