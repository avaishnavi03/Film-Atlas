import { useParams } from "react-router-dom";
import useFetchMovies from "../../hooks/useFetchMovies";
import { TMDB_ENDPOINTS } from "../../services/tmdbEndpoints";
import "./movieDetails.css";
import MovieReviews from "../../components/ui/button/review/review";

function MovieDetails() {
  const { id } = useParams();

  const { data: movie, loading, error } = useFetchMovies({
    url: TMDB_ENDPOINTS.movieDetails(id),
    method: "GET",
  });

  if (loading) {
    return <p className="details-loading">Loading...</p>;
  }

  if (error) {
    return <p className="details-error">Something went wrong</p>;
  }

  return (
    <div className="details-page">
      <div
        className="details-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="backdrop-overlay">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="details-poster"
          />

          <h2 className="details-title">{movie.title}</h2>
        </div>
      </div>
      <p className="details-overview">
        {movie.overview}
      </p>

      <div className="details-reviews">
        <MovieReviews />
      </div>

    </div>
  );
}

export default MovieDetails;
