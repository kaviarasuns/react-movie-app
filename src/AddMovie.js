import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from "yup";

const movieValidationSchema = yup.object({
      name: yup.string().required("Why not fill this name?"), 
      poster: yup.string().required("Why not fill this poster?"),
      rating: yup.number().required("Why not fill this rating?").min(1).max(10),
      summary: yup.string().required("Why not fill this summary?").min(20,"Need a bigger summary"),
      trailer: yup.string().required("Why not fill this trailer?"),
})

export function AddMovie(){
  // const[name, setName] = useState();
  // const[poster,setPoster] = useState();
  // const[rating,setRating] = useState();
  // const[summary,setSummary] = useState();
  // const[trailer,setTrailer] = useState();
  
  const navigate = useNavigate();



     const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
    initialValues: {
      name: "", 
      poster: "",
      rating: "",
      summary: "",
      trailer: ""
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
    
    fetch(`https://62a970b0ec36bf40bdb78a88.mockapi.io/movies`, 
     {
      method: "POST",
      body:JSON.stringify(newMovie),
      headers:{
        "Content-type": "application/json",
      },
    }).then(() => navigate("/movies"));
    console.log(newMovie);
    }

    
return(
<form onSubmit={handleSubmit} className="add-movie-form">
    <TextField id="standard-basic" label="Name" variant="standard" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
    {touched.name && errors.name ? errors.name : ""}
    <TextField id="standard-basic" label="Poster" variant="standard" name="poster" value={values.poster} onChange={handleChange} onBlur={handleBlur}/>
    {touched.poster && errors.poster ? errors.poster : ""}
    <TextField id="standard-basic" label="Rating" variant="standard" name="rating" value={values.rating} onChange={handleChange} onBlur={handleBlur}/>
    {touched.rating && errors.rating ? errors.rating : ""}
    <TextField id="standard-basic" label="Summary" variant="standard" name="summary" value={values.summary} onChange={handleChange} onBlur={handleBlur}/>
    {touched.summary && errors.summary ? errors.summary : ""}
    <TextField id="standard-basic" label="Trailer" variant="standard"  name="trailer" value={values.trailer} onChange={handleChange} onBlur={handleBlur}/>
    {touched.trailer && errors.trailer ? errors.trailer : ""}


    {/* <TextField id="standard-basic" label="Trailer" variant="standard"  onChange={(ele) => setTrailer(ele.target.value)}/> */}
    <Button type="submit" variant="contained">Add Movie</Button>
  </form> 
)
}
