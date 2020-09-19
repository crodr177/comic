import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

import { Store } from "@ngrx/store";

import * as searchComicsActions from "./state/search.actions";
import * as fromComics from '../comics/state/comics.reducer';
import { Comic } from '../comics/state/comic.model';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  comics$: Comic[];
  service;
  title;

  constructor(service: SearchService, private store: Store<fromComics.AppState>, private router: Router) {
    this.service = service;
  }

  ngOnInit(): void {
    this.store.dispatch(new searchComicsActions.GetSearchComics([]));
  }

  search() {
    this.service.getSearchComics(this.title).subscribe();
    this.router.navigate(['/comics']);
    this.title = '';
  }

  allComics(){
    this.router.navigate(['']);
  }

}
