import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { comicsReducer } from "./state/comics.reducer";
import { ComicsEffect } from "./state/comics.effect";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ComicsEffect]),
    StoreModule.forFeature("comics", comicsReducer),
  ]
})
export class ComicsModule { }
