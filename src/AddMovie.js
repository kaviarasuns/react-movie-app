import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


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
    <TextField id="standard-basic" label="Name" variant="standard" onChange={(ele) => setName(ele.target.value)}/>
    <TextField id="standard-basic" label="Poster" variant="standard" onChange={(ele) => setPoster(ele.target.value)}/>
    <TextField id="standard-basic" label="Rating" variant="standard" onChange={(ele) => setRating(ele.target.value)}/>
    <TextField id="standard-basic" label="Summary" variant="standard"  onChange={(ele) => setSummary(ele.target.value)}/>
    <Button onClick={addMovie} variant="contained">Add Movie</Button>
  </div> 
)
}
