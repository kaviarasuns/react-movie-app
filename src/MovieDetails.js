import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";

export function MovieDetails({movieList}) {
  const { id } = useParams();
  
  // const movie = movieList[id];
  
  const [movie, setMovie] = useState({});

  const getMovie = () => {
    fetch(`https://62a970b0ec36bf40bdb78a88.mockapi.io/movies/${id}`, {
      method: "GET",
    }).then((data) => data.json()).then((mv) => setMovie(mv));
  };

  useEffect(() => getMovie(), []);

   const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  
  // Declaring to make back button work:
  const navigate = useNavigate();

  return (
    <div>
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="Youtube video player"
        frameborder="0"
        allow="accelerometer; autoplay; cliboard-write; encrypred-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
      <div className='movie-detail-container'>
        <div className="movie-specs">
          <h2 className='movie-name'>{movie.name}</h2>
          <p style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div>
      
      <Button onClick={()=> navigate(-1)} variant="outlined" startIcon={<ArrowBackIosIcon />}>
        Back
      </Button>
      
      {/* <button onClick={()=> navigate(-1)}>Back</button> */}
      
    </div>
  );
}
