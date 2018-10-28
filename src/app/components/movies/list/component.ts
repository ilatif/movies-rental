import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { MoviesService } from 'app/services/backend/movies-service';

import { Movie } from 'app/interfaces/movie';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'movies-list',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
})
export class MoviesListComponent {
  movies: Array<Movie>;

  constructor(private cd: ChangeDetectorRef,
    private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.moviesService
      .getList()
      .subscribe((movies: Array<Movie>) => {
        this.movies = movies;
        this.cd.detectChanges();
      })
    ;
  }

}
