import { Component, OnInit } from '@angular/core';

import { Store, select } from "@ngrx/store";

import { getSearchComics as searchComicsSelector } from '../search/state/search.selectors';
import * as fromComics from '../comics/state/comics.reducer';
import { Comic } from '../comics/state/comic.model';

import * as helpers from "../helpers";

@Component({
  selector: 'app-search-comics',
  templateUrl: './search-comics.component.html',
  styleUrls: ['./search-comics.component.css']
})
export class SearchComicsComponent implements OnInit {
  comics$: Comic[];
  randomColor: any;

  constructor(private store: Store<fromComics.AppState>) { 
    this.store.pipe(select(searchComicsSelector)).subscribe(data => this.comics$ = data);
    this.randomColor = helpers.randomBgColor();
  }

  ngOnInit(): void {
  }

}
