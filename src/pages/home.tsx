import useFetchMovies from "../hooks/useFetchMovies";
import { TMDB_ENDPOINTS } from "../services/tmdbEndpoints";
import MovieCard from "../components/ui/button/movieCard/card";

function Home() {

  // Simple scroll functions
  const scrollLeft = (rowId : any) => {
    const row = document.getElementById(rowId);
    row.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = (rowId : any) => {
    const row = document.getElementById(rowId);
    row.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  // Fetch Movies
  const { data: trendingData, loading: trendingLoading } =
    useFetchMovies({
      url: TMDB_ENDPOINTS.trending,
      method: "GET",
    });

  const { data: topRatedData, loading: topRatedLoading } =
    useFetchMovies({
      url: TMDB_ENDPOINTS.topRated,
      method: "GET",
    });

  const { data: trendingTVData, loading: trendingTVLoading } =
    useFetchMovies({
      url: TMDB_ENDPOINTS.trendingTV,
      method: "GET",
    });

  const { data: topRatedTVData, loading: topRatedTVLoading } =
    useFetchMovies({
      url: TMDB_ENDPOINTS.topRatedTV,
      method: "GET",
    });

  // Loading state
  if (
    trendingLoading ||
    topRatedLoading ||
    trendingTVLoading ||
    topRatedTVLoading
  ) {
    return <h3 style={{ padding: "20px" }}>Loading...</h3>;
  }


  return (
    <div className="movies-container px-4">

      {/* Trending Movies */}
      <h3 className="section-title">Trending Movies</h3>

      <div className="carousel">

        <button
          className="carousel-btn left"
          onClick={() => scrollLeft("trending")}
        >
          ◀
        </button>

        <div className="movies-row" id="trending">
          {trendingData?.results?.map((movie : any) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date?.slice(0, 4)}
              type="movie"
            />
          ))}
        </div>

        <button
          className="carousel-btn right"
          onClick={() => scrollRight("trending")}
        >
          ▶
        </button>

      </div>

      {/* Top Rated Movies */}
      <h3 className="section-title mt-4">Top Rated Movies</h3>

      <div className="carousel">

        <button
          className="carousel-btn left"
          onClick={() => scrollLeft("topRated")}
        >
          ◀
        </button>

        <div className="movies-row" id="topRated">
          {topRatedData?.results?.map((movie : any) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date?.slice(0, 4)}
              type="movie"
            />
          ))}
        </div>

        <button
          className="carousel-btn right"
          onClick={() => scrollRight("topRated")}
        >
          ▶
        </button>

      </div>


      {/* Trending Series */}
      <h3 className="section-title mt-4">Trending Series</h3>

      <div className="carousel">

        <button
          className="carousel-btn left"
          onClick={() => scrollLeft("trendingTV")}
        >
          ◀
        </button>

        <div className="movies-row" id="trendingTV">
          {trendingTVData?.results?.map((tv : any) => (
            <MovieCard
              key={tv.id}
              id={tv.id}
              posterPath={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date?.slice(0, 4)}
              type="tv"
            />
          ))}
        </div>

        <button
          className="carousel-btn right"
          onClick={() => scrollRight("trendingTV")}
        >
          ▶
        </button>

      </div>


      {/* Top Rated Series */}
      <h3 className="section-title mt-4">Top Rated Series</h3>

      <div className="carousel">

        <button
          className="carousel-btn left"
          onClick={() => scrollLeft("topRatedTV")}
        >
          ◀
        </button>

        <div className="movies-row" id="topRatedTV">
          {topRatedTVData?.results?.map((tv : any) => (
            <MovieCard
              key={tv.id}
              id={tv.id}
              posterPath={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date?.slice(0, 4)}
              type="tv"
            />
          ))}
        </div>

        <button
          className="carousel-btn right"
          onClick={() => scrollRight("topRatedTV")}
        >
          ▶
        </button>

      </div>

    </div>
  );
}

export default Home;