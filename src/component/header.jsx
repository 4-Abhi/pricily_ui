import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_heading">
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  GetAllList
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
