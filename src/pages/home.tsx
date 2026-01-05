import useFetchMovies from "../hooks/useFetchMovies";
import { TMDB_ENDPOINTS } from "../services/tmdbEndpoints";
import MovieCard from "../components/ui/button/movieCard/card";

function Home() {
  const {
    data: popularData,
    loading: popularLoading,
    error: popularError,
  } = useFetchMovies({
    url: TMDB_ENDPOINTS.popular,
    method: "GET",
  });

  const {
    data: trendingData,
    loading: trendingLoading,
    error: trendingError,
  } = useFetchMovies({
    url: TMDB_ENDPOINTS.trending,
    method: "GET",
  });

  const {
    data: topRatedData,
    loading: topRatedLoading,
    error: topRatedError,
  } = useFetchMovies({
    url: TMDB_ENDPOINTS.topRated,
    method: "GET",
  });

//   const { 
//     data: genreData,
//     loading: genreLoading,
//     error: genreError,
//  } = useFetchMovies({
//   url: TMDB_ENDPOINTS.genres,
//   method: "GET",
// });

if (popularLoading || trendingLoading || topRatedLoading) {
   const loadingCards = [];
  for (let i = 0; i < 8; i++) {
    loadingCards.push(<MovieCard key={i} isLoading />);
  }

  return (
    <div className="movies-row px-4">
      {loadingCards}
    </div>
  );
}

  // if (popularLoading || trendingLoading || topRatedLoading) {
  //   return (
  //     <div className="container mt-4">
  //       <p className="text-white">Loading movies...</p>
  //     </div>
  //   );
  // }

  if (popularError || trendingError || topRatedError) {
    return (
      <div className="container mt-4">
        <p className="text-danger">Failed to load data</p>
      </div>
    );
  }

  return (
    <>
    <div className="movies-container px-4">
    <div className="movies-section">
        <h3 className="section-title" >Popular Movies</h3>
      </div>

      <div className="movies-row ">
        {popularData?.results?.map((movie: any) => (
          <MovieCard
            key={movie.id}
              id={movie.id}   
            posterPath={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            year={movie.release_date?.slice(0, 4)}
          />
        ))}
      </div>

      <div className="movies-section">
      <div className="movies-container px-4">
        <h3 className="section-title">Trending Movies</h3>
      </div>

      <div className="movies-row ">
        {trendingData?.results?.map((movie: any) => (
          <MovieCard
            key={movie.id}
              id={movie.id}   
            posterPath={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            year={movie.release_date?.slice(0, 4)}
          />
        ))}
      </div>
      </div>

      <div className="movies-section">
      <div className="movies-container px-4">
        <h3 className="section-title">Top Rated Movies</h3>
      </div>
      <div className="movies-row  mb-4">
        {topRatedData?.results?.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}   
            posterPath={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            year={movie.release_date?.slice(0, 4)}
          />
        ))}
      </div>
      </div>
      </div>
    </>
  );
}

export default Home;
