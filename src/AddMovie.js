import { useState } from "react";
import Button from '@mui/material/Button';


export function AddMovie({movieList, setMovieList}){
  const[name, setName] = useState();
  const[poster,setPoster] = useState();
  const[rating,setRating] = useState();
  const[summary,setSummary] = useState();
  const addMovie = () => {
      const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    setMovieList([...movieList,newMovie]);
    }
return(
<div className="add-movie-form">
    <input placeholder='Name' onChange={(ele) => setName(ele.target.value)}></input>
    <input placeholder='Poster' onChange={(ele) => setPoster(ele.target.value)}></input>
    <input placeholder='Rating' onChange={(ele) => setRating(ele.target.value)}></input>
    <input placeholder='Summary' onChange={(ele) => setSummary(ele.target.value)}></input>
    <Button onClick={addMovie} variant="contained">Add Movie</Button>
  </div> 
)
}
