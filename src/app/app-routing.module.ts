import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {SearchFieldComponent} from "./search-field/search-field.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'search', component: SearchFieldComponent},
  {path: 'movie/:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
