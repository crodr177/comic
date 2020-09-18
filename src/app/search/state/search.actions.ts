import { Action as Actions } from "@ngrx/store";

import { Comic } from "../../comics/state/comic.model";

export enum SearchComicsActionTypes {
  GET_SEARCH_COMICS = '[Comic] Get Search Comics',
}

export class GetSearchComics implements Actions {
  readonly type = SearchComicsActionTypes.GET_SEARCH_COMICS

  constructor(public payload: Comic[]){}
}

export type Action = GetSearchComics;