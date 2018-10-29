import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GenresService } from 'app/services/backend/genres-service';

import { MoviesSearch } from 'app/interfaces/movie';

import { CapitalizeHelper } from 'app/helpers/string';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'movies-main',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
})
export class MoviesMainComponent {

  genres: Array<string> = [];
  searchText: string = '';
  searchGenre: string = '';

  constructor(private cd: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private genresService: GenresService) {

  }

  ngOnInit() {
    this.activatedRoute
      .queryParamMap
      .subscribe((paramsMap) => {
        const params = paramsMap['params'];
        this.searchText = params['text'];
        this.searchGenre = params['genre'];
        this.cd.detectChanges();
      })
    ;

    this.fetchGenres();
  }

  fetchGenres() {
    this.genresService
      .getList()
      .subscribe((genres: Array<string>) => {
        this.genres = genres;
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

    this.router.navigate(['/movies', 'list'], { queryParams: params });
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
}
