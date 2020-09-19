import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { SearchComponent } from './search/search.component';
import { ComicsService } from './comics/comics.service';
import { LikeComponent } from './like/like.component';

import { comicsReducer } from './comics/state/comics.reducer';
import { searchComicsReducer } from "./search/state/search.reducer";
import { SearchComicsComponent } from './search-comics/search-comics.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    SearchComponent,
    LikeComponent,
    SearchComicsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.forRoot([]),
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({
      comics: comicsReducer,
      searchComics: searchComicsReducer
    }),
  ],
  providers: [
    ComicsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
