import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { HttpClientModule} from "@angular/common/http";
import {MovieApiServiceService} from "./service/movie-api-service.service";
import {ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MovieDetailsComponent,
    SearchFieldComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [MovieApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
