import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./table";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { StyledMovieImage } from "./../mystyle/movietableStyling";

class MoviesTable extends Component {
  columns = [
    {
      key: "img",
      content: (movie) => (
        <StyledMovieImage>
          <Link to={`/movies/${movie.movieId}`}>
            {movie.moviePost ? (
              <img
                className="clickable"
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.moviePost}`}
                alt="Movieimage"
              />
            ) : (
              "no image"
            )}
          </Link>
        </StyledMovieImage>
      ),
    },
    {
      path: "movieTitle",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie.movieId}`}>{movie.movieTitle}</Link>
      ),
    },

    { path: "popularity", label: "Popularity" },
    { path: "releaseDate", label: "ReleaseDate" },
    { path: "movieRunTime", label: "rating" },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie.movieId, movie.userFrom)}
          className="btn btn-danger btn-sm"
        >
          {/* <i className="fas fa-trash-alt"></i> */}
          delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
