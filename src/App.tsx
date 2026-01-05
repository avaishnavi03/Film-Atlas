import Header from "./components/header/header";
// import Footer from "./components/footer/footer";
import MovieDetails from "./pages/movieDetails/movieDetails";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Trending from "./pages/trending";
import Popular from "./pages/popular";
import TopRated from "./pages/toprated";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
