import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from 'app/services/backend/movies-service';

import { Movie } from 'app/interfaces/movie';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'movie-detail',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
})
export class MovieDetailComponent {

  movie: Movie;
  movieKey: string = '';

  constructor(private cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.movieKey = this.activatedRoute.snapshot.params['movieKey'];
    this.fetchMovie(this.movieKey);
  }

  fetchMovie(movieKey) {
    this.moviesService
      .getMovie(movieKey)
      .subscribe((movie: Movie)=> {
        this.movie = movie;
        this.cd.detectChanges();
      })
    ;
  }
}