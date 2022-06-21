import {useState, useEffect} from 'react';
import { Movie } from "./Movie";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://62a970b0ec36bf40bdb78a88.mockapi.io/movies", {
      method:"GET",
    })
    .then((data) => data.json())
    .then((mvs) => setMovieList(mvs));
  }

  useEffect(()=> getMovies(),[])

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
