import "./card.css";
import { useNavigate } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";


type MovieCardProps = {
  id?: number;
  posterPath?: string;
  title?: string;
  rating?: number;
  //  genres: string;
  year?: string;
  type?: "movie" | "tv";
  isLoading?: boolean;
};

function MovieCard({ id, posterPath, title, rating, year, type,
  isLoading = false,
}: MovieCardProps) {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="shimmer-card">
        <div className="shimmer-img"></div>
        <div className="shimmer-content">
          <div className="shimmer-line"></div>
          <div className="shimmer-line small"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${posterPath}`}
        alt={title}
        className="movie-poster"
      />

      <div className="card-btn"
        onClick={() =>navigate(type === "tv" ? `/tv/${id}` : `/movie/${id}`) }>
        <FaYoutube className="play-icon" />
      </div>

      <div className="movie-info">
        <h6 className="movie-title">{title}</h6>

        <div className="movie-data">
          <span className="movie-rating"> ⭐{rating?.toFixed(1)}</span>
          <span className="movie-year">{year}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
