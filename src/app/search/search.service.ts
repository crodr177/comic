import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import * as searchComicsActions from "./state/search.actions";
import * as fromComics from "../comics/state/comics.reducer";
import { mapComicData } from 'src/app/helpers';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient, private store: Store<fromComics.ComicsState>) { }

  getSearchComics(character) {
    return this.httpClient.get(`https://cors-anywhere.herokuapp.com/https://api.shortboxed.com/comics/v1/query?publisher=marvel&title=${character}`).pipe(
      map(data => {
        this.store.dispatch(new searchComicsActions.GetSearchComics(mapComicData(data['comics'])));
      })
    );
  }
}
