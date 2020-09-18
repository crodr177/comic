import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { mapComicData } from "../helpers";
import * as fromComics from './state/comics.reducer';
import * as comicsActions from "./state/comics.actions";

import { Store, select } from "@ngrx/store";
import { map } from 'rxjs/operators';

import { ofType, Actions } from '@ngrx/effects';

@Injectable()
export class ComicsService {
  constructor(private httpClient: HttpClient, private store: Store<fromComics.AppState>, private _actions$: Actions) { }

  getComics() {
    return this.httpClient.get('https://cors-anywhere.herokuapp.com/https://api.shortboxed.com/comics/v1/new').pipe(
      map(data => {
        this.store.dispatch(new comicsActions.GetComics(mapComicData(data['comics'])));
      })
    );
  }
}
