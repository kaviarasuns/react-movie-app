import { useState } from "react";
import { Movie } from "./Movie";

export function AddMovie({movieList, setMovieList}) {
  const[name, setName] = useState();
  const[poster,setPoster] = useState();
  const[rating,setRating] = useState();
  const[summary,setSummary] = useState();
return(
  <div>
  <div className="add-movie-form">
    <input placeholder='Name' onChange={(ele) => setName(ele.target.value)}></input>
    <input placeholder='Poster' onChange={(ele) => setPoster(ele.target.value)}></input>
    <input placeholder='Rating' onChange={(ele) => setRating(ele.target.value)}></input>
    <input placeholder='Summary' onChange={(ele) => setSummary(ele.target.value)}></input>
    <button onClick={() => {
      const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    setMovieList([...movieList,newMovie]);
    }}>Add Movie</button>
  </div>
  
 <div className='movie-list'>
        {movieList.map((mv, index) => <Movie key={index} movie={mv}/>)}
      </div>
  </div>
);
}
