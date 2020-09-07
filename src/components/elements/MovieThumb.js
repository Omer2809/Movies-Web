import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { StyledMovieThumb,StyledMovieThumb1 } from "../styles/StyledMovieThumb";
import Favorite from "./Favorite";

const MovieThumb = ({ image, movieId, clickable, movieSend }) => (
  <>
    {clickable ? (
      <StyledMovieThumb>
        <Link to={`/movies/${movieId}`}>
          <img className="clickable" src={image} alt="moviethumb" />
        </Link>
        <Favorite  movie={movieSend} movieId={movieId} />
      </StyledMovieThumb>
    ) : (
      <StyledMovieThumb1>
        <img src={image} alt="moviethumb" />
      </StyledMovieThumb1>
    )}
  </>
);

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default MovieThumb;
