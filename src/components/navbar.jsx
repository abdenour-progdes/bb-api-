import React, { useState, useEffect } from "react";
import SearchBar from "./searchbar";
import logo from "../img/logo.png";
import style from "../style.module.css";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm ">
      <img src={logo} alt="logo" style={{ width: "150px" }} />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto ml-5">
          <li className="nav-item">
            <a
              className="nav-link "
              href="#"
              style={{ color: "white", "font-size": "20px" }}
            >
              Characters
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link "
              href="#"
              style={{ color: "white", "font-size": "20px" }}
            >
              Deaths
            </a>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link"
              href="#"
              style={{ color: "white", "font-size": "20px" }}
            >
              Quotes
            </a>
          </li>
        </ul>
        <SearchBar
          searchbar={props.navbar}
          onSearch={props.onSearch}
          onEnter={props.onEnter}
          search={props.search}
        ></SearchBar>
      </div>
    </nav>
  );
};

export default NavBar;
