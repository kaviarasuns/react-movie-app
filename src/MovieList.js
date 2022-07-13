import {useState, useEffect} from 'react';
import { Movie } from "./Movie";
import { API } from "./global.js"

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method:"GET",
    })
    .then((data) => data.json())
    .then((mvs) => setMovieList(mvs));
  }

  useEffect(()=> getMovies(),[])

  // This code will call too many requests without useEffect
  // getMovies();

  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie
            movieList={movieList}
            setMovieList={setMovieList}
            key={mv.id}
            movie={mv}
            id={mv.id}
            getMovies={getMovies}
          />
        )).reverse()}
      </div>
    </div>
  );
}
