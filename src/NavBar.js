import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  return (
    <div>
      <NavLink to="/" style={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyles}>
        About
      </NavLink>
      <NavLink to="/login" style={linkStyles}>
        Login
      </NavLink>
    </div>
  );
}

export default NavBar;
