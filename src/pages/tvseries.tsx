import { useEffect, useState } from "react";
import MovieCard from "../components/ui/button/movieCard/card";
import useFetchMovies from "../hooks/useFetchMovies";

function TvSeries() {
  const [page, setPage] = useState(1);
  const [tvSeries, setTvSeries] = useState<any[]>([]);

  const { data, loading, error } = useFetchMovies({
    url: `/tv/popular?page=${page}`,
    method: "GET",
  });

  useEffect(() => {
    if (data?.results) {
      setTvSeries(prev => [...prev, ...data.results]);
    }
  }, [data]);

  if (error) {
    return <p className="text-danger px-4">{error}</p>;
  }

  return (
    <div className="movies-container px-4">
      <h2 className="section-title">All TV Series</h2>

      <div className="movies-grid">
        {tvSeries.map(tv => (
          <MovieCard
            key={tv.id}
            id={tv.id}
            posterPath={tv.poster_path}
            title={tv.name}                 // 🔑 TV uses `name`
            rating={tv.vote_average}
            year={tv.first_air_date?.slice(0, 4)} // 🔑 TV uses `first_air_date`
            type="tv"                       // 🔑 important for navigation
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

export default TvSeries;
