import { useEffect, useState } from "react";
import MovieCard from "../components/ui/button/movieCard/card";
import useFetchMovies from "../hooks/useFetchMovies";

function Movies() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<any[]>([]);

  const { data, loading, error } = useFetchMovies({
    url: `/movie/popular?page=${page}`,
    method: "GET",
  });

  useEffect(() => {
    if (data?.results) {
      setMovies(prev => [...prev, ...data.results]);
    }
  }, [data]);

  if (error) {
    return <p className="text-danger px-4">{error}</p>;
  }

  return (
    <div className="movies-container px-4">
      <h2 className="section-title">All Movies</h2>

      <div className="movies-grid">
        {movies.map(movie => (
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

        {loading &&
  [...Array(10)].map((_, i) => (
    <MovieCard key={i} isLoading />
  ))}
      </div>

      {!loading && page < data?.total_pages && (
        <button
          className="load-more-btn"
          onClick={() => setPage(page + 1)}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Movies;
