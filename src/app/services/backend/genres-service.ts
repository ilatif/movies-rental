import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_SERVER } from 'app/../environments/environment';

@Injectable()
export class GenresService {

  constructor(private http: HttpClient) {

  }

  getList() {
    return this.http.get(`${API_SERVER}api/genres`);
  }

}
