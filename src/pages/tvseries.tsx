import { useEffect, useState } from "react";
import MovieCard from "../components/ui/button/movieCard/card";
import useFetchMovies from "../hooks/useFetchMovies";

function TvSeries() {
  const [page, setPage] = useState(1);
  const [tvSeries, setTvSeries] = useState<any[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("");

 const filteredTvSeries = selectedGenre
  ? tvSeries.filter((tv) =>
      tv.genre_ids?.includes(Number(selectedGenre))
    )
  : tvSeries; 

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
      <div className="movies-header">
      <h2 className="section-title">All TV Series</h2>
        <select
    className="genre-dropdown"
    value={selectedGenre}
    onChange={(e) => setSelectedGenre(e.target.value)}
  >
    <option value="">All Genres</option>
    <option value="10759">Action & Adventure</option>
    <option value="35">Comedy</option>
    <option value="18">Drama</option>
    <option value="10765">Sci-Fi & Fantasy</option>
    <option value="80">Crime</option>
    <option value="9648">Mystery</option>
  </select>
</div>

      <div className="movies-grid">
        {filteredTvSeries.map(tv => (
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
