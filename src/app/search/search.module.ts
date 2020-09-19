import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { searchComicsReducer } from "./state/search.reducer";
import { ComicsEffect } from "./state/search.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ComicsEffect]),
    StoreModule.forFeature("searchComics", searchComicsReducer),
  ]
})
export class ComicsModule { }