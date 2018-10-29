import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MoviesService } from 'app/services/backend/movies-service';

import { Movie } from 'app/interfaces/movie';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'movie-detail',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
})
export class MovieDetailComponent {

  movie: Movie;
  movieKey: string = '';
  isLoading: boolean = false;

  movieRequest: Subscription;

  constructor(private cd: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.movieKey = this.activatedRoute.snapshot.params['movieKey'];
    this.fetchMovie(this.movieKey);
  }

  ngOnDestroy() {
    this._cancelMovieRequest();
  }

  fetchMovie(movieKey) {
    this._cancelMovieRequest();
    this.isLoading = true;

    this.movieRequest = this.moviesService
      .getMovie(movieKey)
      .subscribe((movie: Movie)=> {
        this.isLoading = false;
        this.movie = movie;
        this.cd.detectChanges();
      }, (err) => {
        this.router.navigate(['/404'], { skipLocationChange: true });
      })
    ;
  }
  
  back(event) {
    const state = window.history.state;
    if (state && state['navigationId'] === 1) {
      this.router.navigate(['/movies', 'list']);
    } else {
      this.location.back();
    }
  }

  _cancelMovieRequest() {
    if (this.movieRequest) {
      this.movieRequest.unsubscribe();
    }
  }
}
