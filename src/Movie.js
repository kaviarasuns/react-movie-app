import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Movie({ movie, id, movieList, setMovieList }) {
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
        <h2 className="movie-name">{movie.name}
        <IconButton color="primary" aria-label="Toggle-Summary" onClick={() => setShow(!show)}>
      {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
      </IconButton>
      <IconButton color="primary" aria-label="Movie Details" onClick={() => navigate(`/movies/${id}`)}>
        <InfoIcon  />
      </IconButton>
        </h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      
      {/* <button onClick={() => navigate(`/movies/${id}`)}>Info</button> */}
      

      <p style={paraStyles} className="movie-summary">{movie.summary}</p>

      <Counter />
    </div>
  );
}
