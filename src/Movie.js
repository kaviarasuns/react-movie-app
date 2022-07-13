import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Badge from "@mui/material/Badge";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { API } from "./global.js"

export function Movie({mv ,movie, id, movieList, setMovieList, getMovies }) {
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  // const deleteMovie = () => {
  //   setMovieList(movieList.filter((ele) => ele.id !== movie.id));
  // };

  const deleteMovie = () => {
    fetch(`${API}/movies/${movie._id}`,{ method: "DELETE",})
    .then(() => getMovies( ));
  }

  return (
    <Card className="movie-container" sx={{ height: "min-content" }}>
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name"> 
            {movie.name}
            <IconButton
              color="primary"
              aria-label="Movie Details"
              onClick={() => navigate(`/movies/${id}`)}
            >
              <InfoIcon />
            </IconButton>

            <IconButton
              color="primary"
              aria-label="Toggle-Summary"
              onClick={() => setShow(!show)}
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h2>
          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>

        {/* <button onClick={() => navigate(`/movies/${id}`)}>Info</button> */}

        <p style={paraStyles} className="movie-summary">
          {movie.summary}
        </p>
      </CardContent>

      <CardActions>
        <Counter />
        <IconButton style={{marginLeft: "auto"}} color="primary" aria-label="Movie details">
          <Badge color="error">
            <DeleteIcon
              onClick={deleteMovie}
              className="delete-icon"
              color="error"
            />
          </Badge>
        </IconButton>
        <IconButton color="primary" aria-label="Movie details">
          <Badge color="error">
            <EditIcon
              onClick={() => navigate(`/movies/edit/${movie._id}`)}
              className="edit-icon"
              color="success"
            />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
}
