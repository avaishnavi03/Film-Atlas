import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch} from "react-icons/fa";
// import {FaUserCircle} from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa6";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import SearchSuggestions from "./searchSuggestions";

function Header() {
  const navigate = useNavigate();
const watchlist = useSelector((state: RootState) => state.watchlist.items);


  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  function goSearch(){
    if(!query.trim()) return;
    navigate(`/search?q=${query}`);
  }

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="navbar-logo">
        <img
          src="/FilmAtlas.png"
          alt="FILM ATLAS"
          height="42"
        />
      </div>

      <ul className="navbar-nav d-flex flex-row mx-auto gap-3 mb-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/tvseries">
            Tv Series
          </NavLink>
        </li>
      </ul>

      <div className="d-flex align-items-center gap-4">
        <div style={{ position: "relative", cursor: "pointer" }}>

        <FaNotesMedical color="white" size={24} 
        onClick={()=> navigate("/watchlist")}
        />
        {watchlist.length > 0 && (
          <span style={{
            position:"absolute",
            background:"red",
            padding:"2px 6px",
             top: "-6px",
             right: "-10px",
             color: "white",
              borderRadius: "50px",
              fontSize: "12px",
          }}
        >
          {watchlist.length}
          </span>
          )}
          </div>
          <div style={{position:"relative", width:"250px"}}>
        <div className="input-group input-group-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Search movies..."
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            onKeyDown={(e)=>e.key==="Enter" && goSearch()}
          />
          <span className="input-group-text" onClick={goSearch}>
            <FaSearch />
          </span>
        </div>

        {/* <FaUserCircle color="white" size={22} /> */}
        <SearchSuggestions
            query={debouncedQuery}
            clear={()=>setQuery("")}
          />
        </div>
        
      </div>

    </nav>
  );
}

export default Header;