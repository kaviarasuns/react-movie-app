import { useParams } from "react-router-dom";

export function MovieDetails() {
  const { id } = useParams();
  console.log(id);
  const movie = {
    name: "Shutter Island",
    poster: "https://flxt.tmsimg.com/assets/p3531967_p_v13_am.jpg",
    rating: 8.2,
    summary: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    trailer: "https://www.youtube.com/embed/v8yrZSkKxTA",
  };
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
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
    </div>
  );
}
