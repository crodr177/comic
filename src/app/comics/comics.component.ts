import { Component, OnInit} from '@angular/core';
import { ComicsService } from './comics.service';
import { SearchService } from '../search/search.service';

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter } from 'rxjs/operators';

import * as comicsActions from "./state/comics.actions";
import * as fromComics from './state/comics.reducer';
import { Comic } from "./comic.model";


@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  isLiked: boolean;
  idClicked: number;
  clickedIds = [];
  comics$: Observable<fromComics.ComicsState>;
  comicPublishers = [];
  comicsSubscription$;
  comicData;

  constructor(service: ComicsService, private searchService: SearchService, private store: Store<fromComics.AppState>) { }

  onClick(index) {
    this.idClicked = index;
    this.checkIfClickedId(this.idClicked);
  }

  checkIfClickedId(id) {
    if(this.clickedIds.includes(id)){
      this.removeLike(id)
    }
    else {
      this.setLike(id)
    }
  }

  setLike(id) {
    this.clickedIds.push(id);
    this.isLiked = true;
  }

  removeLike(id) {
    this.removeIdFromLikedArr(id);
    this.isLiked = false;
  }

  removeIdFromLikedArr(id) {
    var i = this.clickedIds.indexOf(id);
    this.clickedIds.splice(i, 1);
  }

  ngOnInit() {
    this.store.dispatch(new comicsActions.GetComics([]));
    this.comics$ = this.store.pipe(select(fromComics.getComics));
    this.comicsSubscription$ = this.comics$.subscribe(d => {
    this.comicData = d;
    console.log(this.comicData);
    });
  }
}
