import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from 'app/interfaces/movie';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) {

  }

  getList() {
    return this.http.get<Movie[]>(`/assets/json/movies-list.json`);
  }

}
