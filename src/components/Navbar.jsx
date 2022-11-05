import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={logo} alt="" />
      <ul>
        <li>
          <Link to="">Our Projects</Link>
        </li>
        <li>
          <Link to="">Our team</Link>
        </li>
        <li>
          <Link to="">Why us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
