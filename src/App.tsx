import Header from "./components/header/header";
// import Footer from "./components/footer/footer";
import MovieDetails from "./pages/movieDetails/movieDetails";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import TvSeries from "./pages/tvseries";

import Movies from "./pages/movies";


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        {/* <Route path="/tv/:id" element={<MovieDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
