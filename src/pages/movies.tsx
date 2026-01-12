import { useEffect, useState } from "react";
import MovieCard from "../components/ui/button/movieCard/card";
import useFetchMovies from "../hooks/useFetchMovies";



function Movies() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<any[]>([]);

  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredMovies = selectedGenre
  ? movies.filter((movie) =>
      movie.genre_ids?.includes(Number(selectedGenre))
    )
  : movies;

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
      <div className="movies-header">
      <h2 className="section-title">All Movies</h2>

      <select
  className="genre-dropdown"
  value={selectedGenre}
  onChange={(e) => setSelectedGenre(e.target.value)}
>
  <option value="">All Genres</option>
  <option value="28">Action</option>
  <option value="35">Comedy</option>
  <option value="18">Drama</option>
  <option value="27">Horror</option>
  <option value="10749">Romance</option>
</select>
</div>



      <div className="movies-grid">
        {filteredMovies.map(movie => (
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
