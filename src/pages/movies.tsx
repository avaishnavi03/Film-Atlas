import MovieCard from "../components/ui/button/movieCard/card";
import useFetchMovies from "../hooks/useFetchMovies";

function Movies() {
  const { data, loading, error } = useFetchMovies({
    url: "/movie/popular",
    method: "GET",
  });

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="movies-container">
      <h2>Movies</h2>
      {loading && Array(10).fill(0)
          .map((_, i) => <MovieCard key={i} isLoading />)}

      {!loading &&
        data?.results?.map((movie: any) => (
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
  );
}

export default Movies;
