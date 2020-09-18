import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as searchComicsActions from "./state/search.actions";
// import { getSearchComics as searchComicsSelector } from './state/search.selectors';
import * as fromComics from '../comics/state/comics.reducer';
import { mapComicData } from "../helpers";
import { Comic } from '../comics/state/comic.model';

@Component({
  selector: 'search-bar',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  getComic;
  title;
  service;
  comicData: Comic[];

  constructor(service: SearchService, private store: Store<fromComics.AppState>) {
    this.service = service;
  }

  ngOnInit(): void {
  }

  search() {
    this.service.getComic(this.title).subscribe(data => {
      this.comicData = mapComicData(data['comics']);
      console.log(this.comicData);
      this.store.dispatch(new searchComicsActions.GetSearchComics(this.comicData));
    });
  }

}
