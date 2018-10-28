import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Movie, MoviesSearch } from 'app/interfaces/movie';

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

  searchMovies(params: MoviesSearch) {
    let _params = new HttpParams();
    for (let key in params) {
      _params = _params.append(key, params[key]);
    }

    return this.http.get<Movie[]>(`${API_SERVER}api/movies/search`, { params: _params });
  }

}
