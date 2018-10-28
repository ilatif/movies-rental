export interface Movie {
  id: string,
  key: string,
  name: string,
  description: string,
  genres: Array<string>,
  rate: string,
  length: string,
  img: string,

  _shortDescription: string,
}

export interface MoviesSearch {
  text?: string;
  genre?: string;
}
