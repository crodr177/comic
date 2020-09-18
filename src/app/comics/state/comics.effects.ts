import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of, Subscription } from "rxjs";
import { map, mergeMap, catchError } from 'rxjs/operators'

import { ComicsService } from "../comics.service";
import { SearchService } from "../../search/search.service";
import * as comicsActions from "../state/comics.actions";
import { Comic } from '../comic.model';

@Injectable()
export class ComicsEffect {
  results: Comic[];
  constructor(
    private actions$: Actions,
    private comicsService: ComicsService,
  ) {

  }

  @Effect()
  getComics$: Observable<any> = this.actions$.pipe(
    ofType<comicsActions.GetComics>(
      comicsActions.ComicsActionTypes.GET_COMICS
    ),
    mergeMap(() =>
      this.comicsService.getComics().pipe(
      map(data => {
        this.results = data['comics'].map(comic => {
             return {
               title: comic['title'],
               description: comic['description'],
               releaseDate: comic['release_date'],
               price: comic['price']
             }
           });
        new comicsActions.GetComics(this.results);
      })
    ))
  )

}
