import { useParams } from "react-router-dom";
import useFetchMovies from "../../hooks/useFetchMovies";
import { TMDB_ENDPOINTS } from "../../services/tmdbEndpoints";
import "../movieDetails/movieDetails.css";
import { IMAGE_BASE_URL } from "../../services/tmdbImages";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../../store/watchlistSlice";
import type { AppDispatch } from "../../store/store";
import { useState } from "react";

function TvDetails() {
   const dispatch = useDispatch<AppDispatch>();
  const [added, setAdded] = useState(false);
  const { id = "" } = useParams();

  const { data: tv, loading, error } = useFetchMovies({
    url:
      TMDB_ENDPOINTS.tvDetails(Number(id)) +
      "?append_to_response=videos,credits,images",
    method: "GET",
  });

  if (loading) return <p className="details-loading">Loading...</p>;
  if (error) return <p className="details-error">Something went wrong</p>;

  return (
    <div className="details-page">
      <div
        className="details-backdrop"
        style={{
          backgroundImage: tv.backdrop_path
            ? `url(${IMAGE_BASE_URL}/original${tv.backdrop_path})`
            : "none",
        }}
      >
        
        <div className="backdrop-overlay">
          <div className="details-content">
            <img
              src={`${IMAGE_BASE_URL}/w300${tv.poster_path}`}
              alt={tv.name}
              className="details-poster"
            />

            <div className="details-info">
              <h1 className="details-title">{tv.name}</h1>
              <p className="details-tagline">{tv.tagline}</p>

              <div className="details-meta">
                <span>{tv.first_air_date?.split("-")[0]}</span>
                <span>•</span>
                <span>{tv.number_of_seasons} Seasons</span>
                <span>•</span>
                <span>⭐ {tv.vote_average.toFixed(1)}</span>
              </div>

              <div className="details-genres">
                {tv.genres?.map((genre: any) => (
                  <span key={genre.id} className="genre-pill">
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="details-actions">
                <button className="btn-primary">▶ Watch Trailer</button>
                <button className="btn-secondary"
                disabled={added}
  onClick={() => {
    if (!tv) return;

    dispatch(
      addToWatchlist({
        id: tv.id,
        title: tv.name,
        poster_path: tv.poster_path,
        type: "tv"
      })
    );
    setAdded(true);
  }}>
    {added ? "Added" : "+ Watchlist"}
  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details-extra">
        <div className="details-layout">
          <div className="details-main">
            <h3 className="section-heading">Storyline</h3>
            <p className="details-overview">{tv.overview}</p>

            <div className="top-cast">
              <h3 className="section-heading">Top Cast</h3>
              <div className="cast-list">
                {tv.credits?.cast?.slice(0, 6).map((actor: any) => (
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
            <h4>TV Show Info</h4>

            <div className="info-row">
              <span>First Air Date</span>
              <p>{tv.first_air_date}</p>
            </div>

            <div className="info-row">
              <span>Last Air Date</span>
              <p>{tv.last_air_date}</p>
            </div>

            <div className="info-row">
              <span>Seasons</span>
              <p>{tv.number_of_seasons}</p>
            </div>

            <div className="info-row">
              <span>Episodes</span>
              <p>{tv.number_of_episodes}</p>
            </div>

            <div className="info-row">
              <span>Status</span>
              <p>{tv.status}</p>
            </div>

            <div className="info-row">
              <span>Original Language</span>
              <p>
                {tv.spoken_languages
                  ?.map((lang: any) => lang.english_name)
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="media-section">
        <h3 className="section-heading">Photos</h3>
        <div className="media-row">
          {tv.images?.backdrops?.slice(0, 10).map((img: any, index: number) => (
            <img
              key={index}
              src={`${IMAGE_BASE_URL}/w300${img.file_path}`}
              alt="TV"
              className="media-img"
            />
          ))}
        </div>

        <h3 className="section-heading">Videos</h3>
        <div className="media-row">
          {tv.videos?.results?.slice(0, 5).map((video: any) => (
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

export default TvDetails;
