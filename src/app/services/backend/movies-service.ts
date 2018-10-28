import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from 'app/interfaces/movie';

import { API_SERVER } from 'app/../environments/environment';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) {

  }

  getList() {
    return this.http.get<Movie[]>(`${API_SERVER}api/movies`);
  }

  getMovie(movieKey) {
    return this.http.get<Movie>(`${API_SERVER}api/movies/${movieKey}`);
  }

}
