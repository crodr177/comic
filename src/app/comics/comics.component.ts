import { Component, OnInit} from '@angular/core';
import { ComicsService } from './comics.service';

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import * as comicsActions from "./state/comics.actions";
import { getComics as comicsSelector } from './state/comics.selectors';
import * as fromComics from './state/comics.reducer';
import { mapComicData } from "../helpers";
import { Comic } from './state/comic.model';


@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics$;
  comicsSubscription$;
  comicData;
  getComics;

  constructor(service: ComicsService, private store: Store<fromComics.ComicsState>) {
    this.getComics = service.getComics();
    this.comics$ = this.store.pipe(select(comicsSelector));
   }

  ngOnInit() {
    this.getComics.subscribe();
  }
}
