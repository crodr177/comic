import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { comicsReducer } from "./state/comics.reducer";
import { ComicsEffect } from "./state/comics.effect";

import { ComicsComponent } from './comics.component';
import { LikeComponent } from "../like/like.component";
import { SearchComponent } from '../search/search.component';

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
    StoreModule.forFeature("comics", comicsReducer),
  ]
})
export class ComicsModule { }
