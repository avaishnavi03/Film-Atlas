import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import MovieCard from "../components/ui/button/movieCard/card";
import "./searchResults.css";

function SearchResults() {

  const [results, setResults] = useState<any[]>([]);
  const [params] = useSearchParams();

  const query = params.get("q");

  useEffect(() => {

    if (!query) return;

    async function getData() {
      try {
        const movieResponse = await axiosInstance.get(
          `/search/movie?query=${query}`
        );

        const tvResponse = await axiosInstance.get(
          `/search/tv?query=${query}`
        );

        const allResults = [
          ...movieResponse.data.results,
          ...tvResponse.data.results
        ];

        setResults(allResults);

      } catch (error) {
        console.log("Error fetching data");
      }
    }

    getData();

  }, [query]);

  return (
    <div className="search-page">

      <h2 className="search-title">
        Search Results for "{query}"
      </h2>

      {results.length === 0 && (
        <p className="no-results">No results found</p>
      )}

     <div className="search-flex">
  {results.map((item:any) => (
    <MovieCard
      key={item.id}
      id={item.id}
      posterPath={item.poster_path}
      title={item.title || item.name}
      rating={item.vote_average}
      year={(item.release_date || item.first_air_date)?.split("-")[0]}
      type={item.title ? "movie" : "tv"}
    />
  ))}
</div>

    </div>
  );
}

export default SearchResults;
