import React from "react";
import { Link } from "react-router-dom";
import { StyledNavigation } from "../styles/StyledNavigation";

const Navigation = ({ movie }) => (
  <StyledNavigation>
    <div className="GlobalContainer">
      <div className="navigation-content">
        <Link to="/" className="homeLink">
          <p>Home</p>
        </Link>
        <p>|</p>
        <p>{movie.original_title}</p>
      </div>
    </div>
  </StyledNavigation>
);

export default Navigation;
