import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="movie-list">
      <AddMovie />
      </div>
    </div> 
  );
  
}

export default App;
 
function AddMovie(){
  const [name, setName] = useState();
  const [poster, setPoster] = useState();
  const [rating, setRating] =useState();
  const [summary, setSummary] = useState();
  const addMovieList = {
    name: name,
    poster: poster,
    rating: rating,
    summary: summary,
  }
    const INITIAL_MOVIE_LIST = [
{
name: "Shutter Island",
poster:
"https://flxt.tmsimg.com/assets/p3531967_p_v13_am.jpg",
rating: 8.2,
summary:
"In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",

},
{
name: "Irandam Ulagaporin Kadaisi Gundu",
poster:
"https://m.media-amazon.com/images/M/MV5BNjZlNjgwZGUtYTdhOC00MWM0LWI5MWQtNTZkNzc5OTFjMWExXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
rating: 8.1,
summary:
"A lorry driver ends up in possession of an unexploded bomb that is being sought after by both the cops and pro-peace activists.",

},
{
name: "12 Years a Slave",
poster:
"https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_FMjpg_UX1000_.jpg",
summary:
"In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
rating: 8.1,

},
{
name: "8 Thottakkal",
rating: 7.5,
summary:
"A depressed and loyal policeman loses his gun to a killer, who kills people due the circumstances of his life.",
poster:
"https://m.media-amazon.com/images/M/MV5BMDkwNmMwMDgtZDA3YS00MWExLWI4ODItNjc2Njk2YTg3NjBhXkEyXkFqcGdeQXVyODk4ODEyMjk@._V1_.jpg",

},
{
name: "The Butterfly Effect",
poster: "https://m.media-amazon.com/images/M/MV5BODNiZmY2MWUtMjFhMy00ZmM2LTg2MjYtNWY1OTY5NGU2MjdjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
rating: 7.6,
summary:
"Evan Treborn suffers blackouts during significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life by reading his journal.",

},
{
name: "Lucifer",
poster: "https://i.pinimg.com/originals/26/13/ae/2613ae6cf3bf049cfc92f212add0a900.jpg",
rating: 7.5,
summary:
"A political Godfather dies and a lot of thieves dressed up as politicians took over the rule. Question arises regarding the successor of the God, unfolding few names, along with the God's most beloved angel, Lucifer.",

},
{
name: "The Platform",
poster:
"https://cdn.traileraddict.com/content/netflix/the-platform-poster.jpg",
rating: 7.0,
summary:
"A mysterious place, an indescribable prison, a deep hole. An unknown number of levels. Two inmates living on each level. A descending platform containing food for all of them. An inhuman fight for survival, but also an opportunity for solidarity.",

},
{
name: "Kadaseela Biriyani",
poster:
"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8e031f5-1ee9-4dc9-8d52-851ce4adc93d/dev4uv8-7c939013-6511-48e9-bcc4-4aa7f64566c1.jpg/v1/fill/w_1280,h_1968,q_75,strp/kadaseela_biriyani___audio_release_poster_by_sivadigitalart_dev4uv8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk2OCIsInBhdGgiOiJcL2ZcL2Q4ZTAzMWY1LTFlZTktNGRjOS04ZDUyLTg1MWNlNGFkYzkzZFwvZGV2NHV2OC03YzkzOTAxMy02NTExLTQ4ZTktYmNjNC00YWE3ZjY0NTY2YzEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qtlHFAFbBOvjg1UxCnXM7NO8NKSZ_Sp7Yo49aoBdGHY",
rating: 7.5,
summary:
"Hoping to avenge their father's death, a trio of brothers break into the local landlord's rubber estate. What begins as an idyllic plan quickly devolves into an increasingly bizarre and violent survival chase at the hands of the landlord's maniac son.",

}
];
    const [movieList, setaddMovieList] = useState(INITIAL_MOVIE_LIST)
  
    return(
      <div className='movie-list'>
        <div className='movie-div'>
        <div><input className='add-movie' onChange={(ele) => setName(ele.target.value)} placeholder='Name'></input></div>
        <div><input className='add-movie' onChange={(ele) => setPoster(ele.target.value)} placeholder='Poster'></input></div>
        <div><input className='add-movie' onChange={(ele) => setRating(ele.target.value)} placeholder='Rating'></input></div>
        <div><input className='add-movie' onChange={(ele) => setSummary(ele.target.value)} placeholder='Summary'></input></div> 
        <button className="add-movie-button"onClick={() => setaddMovieList([...movieList,addMovieList])}>Add Movie</button>
        </div>
        {movieList.map((mv,index) => (<Movie key={index} movie={mv}/>))}
      </div>
    );
}

function Movie({movie}){
  const styles= {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  };

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-specs">
      <h2 className="movie-name">{movie.name}</h2>
      <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>

      <button onClick={() => setShow(!show)}>Toggle Summary</button>
      <p style={paraStyles}className="movie-summary">{movie.summary}</p>

      <Counter />
    </div>
  )
}

function AddColor(){
  const [color, setColor] = useState("deepskyblue");
  const styles ={
    backgroundColor: color,
  };
  const INITIAL_COLOR_LIST = ["deepskyblue","orange","purple","blue"];
  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST)
   

  return(
    <div> 
      <input  value={color} onChange={(event) => setColor(event.target.value)} style={styles} placeholder='Enter a color'></input>
     
      <button onClick={() => setColorList([...colorList,color])}>Add Color</button>
      {colorList.map((clr,index) => (<ColorBox key={index} color={clr}/>))}
    </div>   
  )
} 

function ColorBox({ color }){
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "250px",
    marginTop: "10px",
  }
  
  return(
    <div style={styles}></div>
  )
}


function Counter(){
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return(
    <div className="counters-container">
      <button className="like-button"onClick= {()=> setLike(like + 1)}> 👍 {like}</button>
      <button className="dislike-button" onClick= {()=> setDislike(dislike + 1)}> 😕 {dislike}</button>
    </div>
  )
}



