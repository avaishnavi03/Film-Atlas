import { useParams } from "react-router-dom";
import useFetchMovies from "../../hooks/useFetchMovies";
import { TMDB_ENDPOINTS } from "../../services/tmdbEndpoints";
import "./movieDetails.css";
import { IMAGE_BASE_URL } from "../../services/tmdbImages";
import ShimmerDetails from "../../components/ui/button/movieCard/ShimmerDetails/shimmerdetails"
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addToWatchlist } from "../../store/watchlistSlice";
import type { AppDispatch } from "../../store/store";



function MovieDetails() {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { id = "" } = useParams();

  const { data: movie, loading, error } = useFetchMovies({
    url:
      TMDB_ENDPOINTS.movieDetails(Number(id)) +
      "?append_to_response=videos,credits,images",
    method: "GET",
  });

  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

    function openTrailer() {
    const trailer = movie.videos?.results?.[0];
    if (trailer) {
      setTrailerKey(trailer.key);
      setShowTrailer(true);
    } else {
      alert("Trailer not found");
    }
  }


  if (loading) {
    return <ShimmerDetails />;
  }

  if (error) {
    return <p className="details-error">Something went wrong</p>;
  }

  return (
    <div className="details-page">
      <div
        className="details-backdrop"
        style={{
          backgroundImage: movie.backdrop_path
            ? `url(${IMAGE_BASE_URL}/original${movie.backdrop_path})`
            : "none",
        }}
      >

        <div className="backdrop-overlay">
          <div className="details-content">
            <img
              src={`${IMAGE_BASE_URL}/w300${movie.poster_path}`}
              alt={movie.title}
              className="details-poster"
            />
            <div className="details-info">
              <h1 className="details-title">{movie.title}</h1>
              <p className="details-tagline">{movie.tagline}</p>

              <div className="details-meta">
                <span>{movie.release_date?.split("-")[0]}</span>
                <span>•</span>
                <span>{movie.runtime} min</span>
                <span>•</span>
                <span>⭐ {movie.vote_average.toFixed(1)}</span>
              </div>

              <div className="details-genres">
                {movie.genres?.map((genre: any) => (
                  <span key={genre.id} className="genre-pill">
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="details-actions">
                <button className="btn-primary"  onClick={openTrailer}>▶ Watch Trailer</button>
                <button className="btn-secondary" disabled={added} onClick={()=>{
                  if(!movie) return;
              
                  dispatch(
                    addToWatchlist({
                      id: movie.id,
                      title:movie.title,
                      poster_path:movie.poster_path,
                    })
                  );
                  setAdded(true);
                }}
                >
                   {added ? "Added" : "+ Watchlist"}
                   </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showTrailer && (
        <div className="trailer-box">
          <button className="close-btn" onClick={() => setShowTrailer(false)}>
            X
          </button>
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Trailer"
            allowFullScreen
          />
        </div>
      )}

      <div className="details-extra">
        <div className="details-layout">
          <div className="details-main">
            <h3 className="section-heading">Storyline</h3>
            <p className="details-overview">{movie.overview}</p>

            <div className="top-cast">
              <h3 className="section-heading">Top Cast</h3>
              <div className="cast-list">
                {movie.credits?.cast?.slice(0, 6).map((actor: any) => (
                  <div key={actor.id} className="cast-card">
                    <img
                      src={
                        actor.profile_path
                          ? `${IMAGE_BASE_URL}/w185${actor.profile_path}`
                          : "/no-avatar.png"
                      }
                      alt={actor.name}
                    />
                    <p className="cast-name">{actor.name}</p>
                    <p className="cast-role">{actor.character}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="movie-info-card">
            <h4>Movie Info</h4>

            <div className="info-row">
              <span>Release Date</span>
              <p>{movie.release_date}</p>
            </div>

            <div className="info-row">
              <span>Director</span>
              <p>
                {
                  movie.credits?.crew?.find(
                    (person: any) => person.job === "Director"
                  )?.name
                }
              </p>
            </div>
            <div className="info-row">
              <span>Production</span>
              <p>{movie.production_companies?.[0]?.name}</p>
            </div>
            <div className="info-row">
              <span>Runtime</span>
              <p>{movie.runtime} minutes</p>
            </div>

            <div className="info-row">
              <span>Budget</span>
              <p>${movie.budget?.toLocaleString()}</p>
            </div>
            <div className="info-row">
              <span>Original Language</span>
              <p>
                {movie.spoken_languages
                  ?.map((lang: any) => lang.english_name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>

        <div className="media-section">
        <h3 className="section-heading">Photos</h3>
        <div className="media-row">
          {movie.images?.backdrops?.slice(0, 10).map((img: any, index: number) => (
            <img
              key={index}
              src={`${IMAGE_BASE_URL}/w300${img.file_path}`}
              alt="Movie"
              className="media-img"
            />
          ))}
        </div>

        <h3 className="section-heading">Videos</h3>
        <div className="media-row">
          {movie.videos?.results?.slice(0, 5).map((video: any) => (
            <iframe
              key={video.id}
              className="media-video"
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              allowFullScreen
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
