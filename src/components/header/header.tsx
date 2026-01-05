import { NavLink } from "react-router-dom";
import { FaSearch} from "react-icons/fa";

function Header() {
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
          <NavLink className="nav-link" to="/trending">
            Trending
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/popular">
            Popular
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/top-rated">
            Top Rated
          </NavLink>
        </li>
      </ul>

      <div className="d-flex align-items-center gap-3">
        <div className="input-group input-group-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Search movies..."
          />
          <span className="input-group-text">
            <FaSearch />
          </span>
        </div>

        {/* <FaUserCircle color="white" size={22} /> */}
      </div>

    </nav>
  );
}

export default Header;