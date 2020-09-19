import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { mapComicData } from "../helpers";
import * as fromComics from './state/comics.reducer';
import * as comicsActions from "./state/comics.actions";

import { Store } from "@ngrx/store";
import { map } from 'rxjs/operators';

@Injectable()
export class ComicsService {
  constructor(private httpClient: HttpClient, private store: Store<fromComics.ComicsState>) { }

  getComics() {
    return this.httpClient.get('https://cors-anywhere.herokuapp.com/https://api.shortboxed.com/comics/v1/query?publisher=marvel').pipe(
      map(data => {
        this.store.dispatch(new comicsActions.GetComics(mapComicData(data['comics'])));
      })
    );
  }
}
