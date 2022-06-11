import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";

export function Movie({ movie, id }) {
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>

      <button onClick={() => setShow(!show)}>Toggle Summary</button>
      <button onClick={() => navigate(`/movies/${id}`)}>Info</button>

      <p style={paraStyles} className="movie-summary">{movie.summary}</p>

      <Counter />
    </div>
  );
}
