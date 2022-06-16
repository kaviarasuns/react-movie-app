import { Movie } from "./Movie";

export function MovieList({ movieList, setMovieList }) {
  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie
            movieList={movieList}
            setMovieList={setMovieList}
            key={index}
            movie={mv}
            id={index}
          />
        ))}
      </div>
    </div>
  );
}
