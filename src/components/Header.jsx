import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Zoo App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/animals">
                  Animals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/birds">
                  Birds
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/insects">
                  Insects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fishes">
                  Fishes
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
