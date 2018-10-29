import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MoviesService } from 'app/services/backend/movies-service';

import { Movie } from 'app/interfaces/movie';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'movies-list',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
})
export class MoviesListComponent {
  movies: Array<Movie> = [];
  isLoading: boolean = false;

  genres: Array<string> = [];

  constructor(private cd: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.activatedRoute
      .queryParamMap
      .subscribe((paramsMap) => {
        const params = paramsMap['params'];

        if (Object.keys(params).length) {
          this.searchMovies(params);
        } else {
          this.fetchMoviesList();
        }

        this.cd.detectChanges();
      })
    ;
  }

  fetchMoviesList() {
    this.isLoading = true;

    this.moviesService
      .getList()
      .subscribe((movies: Array<Movie>) => {
        this.isLoading = false;
        this.movies = movies;
        this.cd.detectChanges();
      }, (err) => {
        this.isLoading = false;
        this.cd.detectChanges();
      })
    ;
  }

  searchMovies(params) {
    this.isLoading = true;

    this.moviesService
      .searchMovies(params)
      .subscribe((movies: Array<Movie>) => {
        this.isLoading = false;
        this.movies = movies;
        this.cd.detectChanges();
      }, (err) => {
        this.isLoading = false;
        this.cd.detectChanges();
      })
    ;
  }
}
