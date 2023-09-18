import { NavLink, Link } from 'react-router-dom';
import '../../App.css'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
        <div className="container">
          <Link to="/" className="fs-3 navbar-brand">
            Rick & Morty <span className="text-info">Wiki</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
           
          >

            <span className="navbar-toggler-icon "></span>

          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav fs-5">
              <li className="nav-item">
                <NavLink to="/" activeClassName="active" className="nav-link " aria-current="page">
                  Personajes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/episodes" className="nav-link">
                  Episodios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/location" className="nav-link">
                  Ubicacion
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
