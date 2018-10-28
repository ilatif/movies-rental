const express = require('express'),
  cors = require('cors');
  fs = require('fs'),
  app = express();

let movies = [];

app.use(cors());

app.get('/api/movies/search', (req, res) => {
  const searchedMovies = [],
    movies = getMovies(),
    searchText = req.query.text,
    searchGenre = req.query.genre;

  movies.forEach(movie => {
    if (searchText && (movie.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 || movie.description.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)) {
      searchedMovies.push(movie);
    } else if (searchGenre && movie.genres.indexOf(searchGenre) !== -1) {
      searchedMovies.push(movie);
    }
  });

  res.type('application/json');
  res.send(searchedMovies);
});

app.get('/api/movies', (req, res) => {
  const movies = getMovies();
  res.type('application/json');
  res.send(movies);
});

app.get('/api/movies/:movieKey', (req, res) => {
  let movie;
  const movies = getMovies();

  for(let index = 0; index < movies.length; index++) {
    let _movie = movies[index];
    if (_movie.key === req.params.movieKey) {
      movie = _movie;
      break;
    }
  }

  res.type('application/json');
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).send('{ "error": "movie.not.found" }');
  }
});

function getMovies() {
  if (!movies.length) {
    movies = JSON.parse(fs.readFileSync('../src/assets/json/movies-list.json', 'utf8'));
  }
  return movies;
}

app.listen(4300, () => { console.log('API Server started') });
