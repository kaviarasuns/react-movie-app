import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from 'formik';
import * as yup from "yup";

const movieValidationSchema = yup.object({
      name: yup.string().required("Why not fill this name?"), 
      poster: yup.string().required("Why not fill this poster?"),
      rating: yup.number().required("Why not fill this rating?").min(1).max(10),
      summary: yup.string().required("Why not fill this summary?").min(20,"Need a bigger summary"),
      trailer: yup.string().required("Why not fill this trailer?"),
})


export function EditMovie(){

   const { id } = useParams();
  
  // const movie = movieList[id];
  
  const [movie, setMovie] = useState(null);

  const getMovie = () => {
    fetch(`https://62a970b0ec36bf40bdb78a88.mockapi.io/movies/${id}`, {
      method: "GET",
    }).then((data) => data.json()).then((mv) => setMovie(mv));
  };

  useEffect(() => getMovie(), []);


    return(
        movie ?  <EditMovieForm movie={movie}/> : "Loading..."
    )
}


function EditMovieForm({movie}){
  const[name, setName] = useState(movie.name);
  const[poster,setPoster] = useState(movie.poster);
  const[rating,setRating] = useState(movie.rating);
  const[summary,setSummary] = useState(movie.summary);
  const[trailer,setTrailer] = useState(movie.trailer);


  const navigate = useNavigate();


  const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
    initialValues: {
      name: movie.name, 
      poster: movie.poster,
      rating: movie.rating,
      summary: movie.summary,
      trailer: movie.trailer,
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      console.log("onSubmit", newMovie);
      addMovie(newMovie);
    }
  });

  const addMovie = (newMovie) => {
    //   const newMovie = { 
    //   name: name, 
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };
    // setMovieList([...movieList,newMovie]);
    
    fetch(`https://62a970b0ec36bf40bdb78a88.mockapi.io/movies/${movie.id}`, 
     {
      method: "PUT",
      body:JSON.stringify(newMovie),
      headers:{
        "Content-type": "application/json",
      },
    }).then(() => navigate("/movies"));
    console.log(newMovie);
    }

    
  return(
      <form onSubmit={handleSubmit} className="add-movie-form">
          {/* {JSON.stringify(movie)} */}
    <TextField  id="standard-basic" label="Name" variant="standard" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
    {touched.name && errors.name ? errors.name : ""}
    <TextField  id="standard-basic" label="Poster" variant="standard" name="poster" value={values.poster} onChange={handleChange} onBlur={handleBlur}/>
    {touched.poster && errors.poster ? errors.poster : ""}
    <TextField  id="standard-basic" label="Rating" variant="standard" name="rating" value={values.rating} onChange={handleChange} onBlur={handleBlur}/>
    {touched.rating && errors.rating ? errors.rating : ""}
    <TextField  id="standard-basic" label="Summary" variant="standard"  name="summary" value={values.summary} onChange={handleChange} onBlur={handleBlur}/>
    {touched.summary && errors.summary ? errors.summary : ""}
    <TextField  id="standard-basic" label="Trailer" variant="standard"  name="trailer" value={values.trailer} onChange={handleChange} onBlur={handleBlur}/>
    {touched.trailer && errors.trailer ? errors.trailer : ""}

    <Button type="submit" variant="outlined" color="success">Save</Button>
  
  </form>
  )
}






















// import { useState } from "react";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react";


// export function EditMovie(){

//    const { id } = useParams();
  
//   // const movie = movieList[id];
  
//   const [movie, setMovie] = useState(null);

//   const getMovie = () => {
//     fetch(`https://62a970b0ec36bf40bdb78a88.mockapi.io/movies/${id}`, {
//       method: "GET",
//     }).then((data) => data.json()).then((mv) => setMovie(mv));
//   };

//   useEffect(() => getMovie(), []);


//     return(
//         movie ?  <EditMovieForm movie={movie}/> : "Loading..."
//     )
// }


// function EditMovieForm({movie}){
//   const[name, setName] = useState(movie.name);
//   const[poster,setPoster] = useState(movie.poster);
//   const[rating,setRating] = useState(movie.rating);
//   const[summary,setSummary] = useState(movie.summary);
//   const[trailer,setTrailer] = useState(movie.trailer);


//   const navigate = useNavigate();

//   const addMovie = () => {
//       const newMovie = { 
//       name: name, 
//       poster: poster,
//       rating: rating,
//       summary: summary,
//       trailer: trailer,
//     };
//     // setMovieList([...movieList,newMovie]);
    
//     fetch(`https://62a970b0ec36bf40bdb78a88.mockapi.io/movies/${movie.id}`, 
//      {
//       method: "PUT",
//       body:JSON.stringify(newMovie),
//       headers:{
//         "Content-type": "application/json",
//       },
//     }).then(() => navigate("/movies"));
//     console.log(newMovie);
//     }


//   return(
//       <div className="add-movie-form">
//           {/* {JSON.stringify(movie)} */}
//     <div className="add-movie-form">
//     <TextField value={name} id="standard-basic" label="Name" variant="standard" onChange={(ele) => setName(ele.target.value)}/>
//     <TextField value={poster} id="standard-basic" label="Poster" variant="standard" onChange={(ele) => setPoster(ele.target.value)}/>
//     <TextField value={rating} id="standard-basic" label="Rating" variant="standard" onChange={(ele) => setRating(ele.target.value)}/>
//     <TextField value={summary} id="standard-basic" label="Summary" variant="standard"  onChange={(ele) => setSummary(ele.target.value)}/>
//     <TextField value={trailer} id="standard-basic" label="Trailer" variant="standard"  onChange={(ele) => setTrailer(ele.target.value)}/>
//     <Button onClick={addMovie} variant="outlined" color="success">Save</Button>
//   </div> 
//   </div> 
//   )
// }