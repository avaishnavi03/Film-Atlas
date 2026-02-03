import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { removeFromWatchlist } from "../../store/watchlistSlice";
import "./watchlist.css";
import { IMAGE_BASE_URL } from "../../services/tmdbImages";

function Watchlist() {
  const dispatch = useDispatch<AppDispatch>();
  const watchlist = useSelector((state: RootState) => state.watchlist.items);

  if (watchlist.length === 0) {
    return <h2 className="empty-text">No movies in Watchlist</h2>;
  }

  return (
    <div className="watchlist-container">
      <h2 className="watchlist-title">My Watchlist</h2>

      {watchlist.map((movie) => (
        <div key={movie.id} className="watchlist-card">
          <img
            src={`${IMAGE_BASE_URL}/w200${movie.poster_path}`}
            alt={movie.title}
            className="watchlist-image"
          />

          <p className="watchlist-name">{movie.title}</p>

          <button
            className="remove-btn"
            onClick={() => dispatch(removeFromWatchlist(movie.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Watchlist;