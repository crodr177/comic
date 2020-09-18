import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { searchComicsReducer } from "./state/search.reducer";
import { ComicsEffect } from "./state/search.effects";

import { LikeComponent } from "../like/like.component";
import { SearchComponent } from '../search/search.component';
import { ComicsComponent } from '../comics/comics.component';

const comicsRoutes: Routes = [
  { path: "", component: ComicsComponent},
  { path: "comic/:id", component: SearchComponent},
];

@NgModule({
  declarations: [
    LikeComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ComicsEffect]),
    RouterModule.forChild(comicsRoutes),
    StoreModule.forFeature("search comics", searchComicsReducer),
  ]
})
export class ComicsModule { }