import "./card.css";
import { useNavigate } from "react-router-dom";

type MovieCardProps = {
  id?: number;  
  posterPath?: string;
  title?: string;
  rating?: number;
//  genres: string;
  year?: string;
   isLoading?: boolean;
};

function MovieCard({ id, posterPath, title, rating, year,
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
         <div className="card-btn">
          <button
            className="view-details-btn"
            onClick={() => navigate(`/movie/${id}`)}
          >
            View Details
          </button>
        </div>

      <div className="movie-info">
        <h6 className="movie-title">{title}</h6>

        <div className="movie-data">
          <span className="movie-rating"> ⭐{rating.toFixed(1)}</span>
          <span className="movie-year">{year}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
