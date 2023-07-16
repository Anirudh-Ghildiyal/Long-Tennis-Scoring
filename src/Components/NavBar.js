import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTrophy,
  faGamepad,
  faBars,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Images/Logo.png";
import "../CSS/NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.poyntsports.com/">
            <img
              src={Logo}
              alt="Logo"
              width={100}
              className="d-inline-block align-text-top ms-3 logo"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <FontAwesomeIcon icon={faHome} className="navbar-icon" />
                  <span className="navbar-text active">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <FontAwesomeIcon icon={faUser} className="navbar-icon" />
                  <span className="navbar-text">Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/creatematch">
                  <FontAwesomeIcon icon={faGamepad} className="navbar-icon" />
                  <span className="navbar-text">Create Match</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lifetimescore">
                  <FontAwesomeIcon icon={faTrophy} className="navbar-icon" />
                  <span className="navbar-text">Lifetime Score</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faBars} className="navbar-icon" />
                  <span className="navbar-text">More Options</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="https://www.poyntsports.com/">
                      Create Events
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.poyntsports.com/">
                      Tournaments
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.poyntsports.com/">
                      Search Venues
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.poyntsports.com/">
                      Coaching
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.poyntsports.com/">
                      Shop
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
