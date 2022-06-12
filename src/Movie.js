import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    <Card className="movie-container" sx={{height: 'min-content'}}>
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}
        <IconButton color="primary" aria-label="Movie Details" onClick={() => navigate(`/movies/${id}`)}>
        <InfoIcon  />
      </IconButton>
      
      <IconButton color="primary" aria-label="Toggle-Summary" onClick={() => setShow(!show)}>
      {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
      </IconButton>
      
        </h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      
      {/* <button onClick={() => navigate(`/movies/${id}`)}>Info</button> */}
      

      <p style={paraStyles} className="movie-summary">{movie.summary}</p>
      </CardContent>
      
      <CardActions>
        <Counter />  
      </CardActions>
    </Card>
  );
}
