import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComicsComponent } from './comics/comics.component';

const appRoutes: Routes = [
  { path: "", component: ComicsComponent },
  {
    path: "comics",
    loadChildren: "../app/comics.comics.module#ComicsModule"
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
