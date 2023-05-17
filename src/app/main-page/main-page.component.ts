import {Component, OnInit} from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import {Meta, Title} from "@angular/platform-browser";
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  constructor(private service: MovieApiServiceService,private title:Title,private meta:Meta) {
    this.title.setTitle('Home - showtime');
    this.meta.updateTag({name:'description',content:'watch online movies'});

  }
  mustWatchMovieResult: any = [];
  recommendedMovieResult: any = [];
  bollywoodMovieResult: any = [];
  ngOnInit(): void {
    this.mustWatchMovieData();
    this.recommendedMovie();
    this.bollywoodMovie();
  }

  mustWatchMovieData() {
    this.service.mustWatchMovieApiData().subscribe((result) => {
      console.log(result, 'mustwatchresult#');
      this.mustWatchMovieResult = result.results;
    });
  }
    recommendedMovie() {
    this.service.fetchRecommendedMovies().subscribe((result) => {
      this.recommendedMovieResult = result.results;
    });
  }

  bollywoodMovie() {
    this.service.fetchBollywoodMovies().subscribe((result) => {
      this.bollywoodMovieResult = result.results;
    });
  }
}
