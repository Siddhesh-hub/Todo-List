import React from "react";
import PropTypes from "prop-types";
import {
  Link
} from "react-router-dom";

export default function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link class="navbar-brand" to="/">
          {props.title}
        </Link>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
          {props.searchBar ? (
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

//Default Props example
Header.defaultProps = {
  title: "Title here!!",
  //searchBar: true
}


// PropTypes example
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
