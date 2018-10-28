import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';

import { CapitalizeHelper } from 'app/helpers/string';

import { Movie } from 'app/interfaces/movie';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'movie',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
})
export class MovieComponent {

  @Input() item: Movie;
  @Input() type: string = 'card';
  
  movieDescriptionTrimIndex: number = 50;
  displayedColumns: Array<string>;
  irrelevantColumns: Array<string> = ['id', 'key', 'img'];
  imageLoadingPlaceholder: string = '/assets/images/image-loading.png';

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnChanges(changes) {
    if (changes.item) {
      this.item = this._formatItem(this.item);
      if (this.type === 'detail') {
        this.displayedColumns = Object.keys(this.item);
      }
    }
  }

  capitalize(str) {
    return CapitalizeHelper(str);
  }

  _formatItem(movie: Movie): Movie {
    movie._shortDescription = movie.description;
    if (movie._shortDescription.length > this.movieDescriptionTrimIndex) {
      movie._shortDescription = `${movie._shortDescription.slice(0, this.movieDescriptionTrimIndex)}...`;
    }

    movie.img = `/assets/images/movie-covers/${movie.img}`;
    movie.genres = movie.genres.map(genre => CapitalizeHelper(genre));

    return movie;
  }

}
