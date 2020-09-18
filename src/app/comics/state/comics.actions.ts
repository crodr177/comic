import { Action as Actions } from "@ngrx/store";

import { Comic } from "./comic.model";

export enum ComicsActionTypes {
  GET_COMICS = '[Comic] Get Comics',
}

export class GetComics implements Actions {
  readonly type = ComicsActionTypes.GET_COMICS

  constructor(public payload: Comic[]){}
}

export type Action = GetComics;
