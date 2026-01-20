import Header from "./components/header/header";
// import Footer from "./components/footer/footer";
import MovieDetails from "./pages/movieDetails/movieDetails";

import TvDetails from "./pages/tvDetails/tvDetails";
// import Watchlist from "../src/pages/watchlist/watchlist"
import Watchlist from "./pages/watchlist/watchlist";


import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import TvSeries from "./pages/tvseries";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TvDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
