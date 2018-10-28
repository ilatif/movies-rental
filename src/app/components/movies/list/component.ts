import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MoviesService } from 'app/services/backend/movies-service';

import { Movie, MoviesSearch } from 'app/interfaces/movie';

import { CapitalizeHelper } from 'app/helpers/string';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'movies-list',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
})
export class MoviesListComponent {
  movies: Array<Movie> = [];
  isLoading: boolean = false;

  searchText: string = '';
  searchGenre: string = '';

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
        this.searchText = params['text'];
        this.searchGenre = params['genre'];

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
        this._prepareGenres(this.movies);
        this.cd.detectChanges();
      }, (err) => {
        this.isLoading = false;
        this.cd.detectChanges();
      })
    ;
  }
  
  search(event) {
    const params = this._prepareSearchParams();
    if (!Object.keys(params).length) {
      alert('Please select some search params');
      return;
    }
    this.searchMovies(params);
  }

  searchMovies(params) {
    this.isLoading = true;
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: params });

    this.moviesService
      .searchMovies(params)
      .subscribe((movies: Array<Movie>) => {
        this.isLoading = false;
        this.movies = movies;
        this._prepareGenres(this.movies);
        this.cd.detectChanges();
      }, (err) => {
        this.isLoading = false;
        this.cd.detectChanges();
      })
    ;
  }

  capitalize(str: string): string {
    return CapitalizeHelper(str);
  }

  _prepareSearchParams(): MoviesSearch {
    const params: MoviesSearch = {};
    if (this.searchText) {
      params['text'] = this.searchText;
    }

    if (this.searchGenre) {
      params['genre'] = this.searchGenre;
    }

    return params;
  }

  _prepareGenres(movies: Array<Movie>) {
    const genres: Array<string> = [];
    movies.forEach((movie: Movie) => {
      const _genres = movie.genres;
      _genres.forEach((genre: string) => {
        if (genres.indexOf(genre) === -1) {
          genres.push(genre);
        }
      });
    });

    this.genres = genres;
  }

}
