import { Component, OnInit} from '@angular/core';
import { ComicsService } from './comics.service';

import { Store, select } from "@ngrx/store";

import * as comicsActions from "./state/comics.actions";
import { getComics as comicsSelector } from './state/comics.selectors';
import * as fromComics from './state/comics.reducer';
import { Comic } from "./state/comic.model";


@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics$: Comic[];
  comicsSubscription$;
  getComics;

  constructor(service: ComicsService, private store: Store<fromComics.AppState>) {
    this.getComics = service.getComics();
    this.store.pipe(select(comicsSelector)).subscribe(data => this.comics$ = data);
   }

  ngOnInit() {
    this.store.dispatch(new comicsActions.GetComics([]));
    this.getComics.subscribe();
  }
}
