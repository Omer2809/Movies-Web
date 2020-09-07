import React, { Component } from "react";
import MoviesTable from "./common/moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "./common/paginate";
import auth from "../services/authService";
import http from "../services/httpService";
import _ from "lodash";

class WatchList extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "movieTitle", order: "asc" },
    Loading: true,
  };

  componentDidMount() {
    let variable = { userFrom: auth.getCurrentUser()._id };
    http.post(`/favorite/getFavoredMovie`, variable).then((response) => {
      if (response.data.success) {
        // console.log(response.data.favorites);
        const movies = response.data.favorites;
        this.setState({ movies, Loading: false });
      } else {
        alert("Failed to get subscription videos");
      }
    });
  }

  handleDelete = (movieId, userFrom) => {
    const variables1 = {
      movieId: movieId,
      userFrom: userFrom,
    };

    const originalMovies = this.state.movies;
    const originalCurrentPage = this.state.currentPage;
    const originalLoading = this.state.Loading;
    const movies = originalMovies.filter((m) => m.movieId !== movieId);
    const currentPage = originalCurrentPage - 1;

    console.log(originalMovies, movies);
    if (movies.length > 3 && movies.length % 4 === 0) {
      this.setState({ movies, Loading: false ,currentPage});
    }
    this.setState({ movies, Loading: false });


      http.post("/favorite/removeFromFavorite", variables1).then((response) => {
        if (response.data.success) {
          // fetchFavoredMovie();
          http
            .post(`/favorite/getFavoredMovie`, variables1)
            .then((response) => {
              if (response.data.success) {
                // console.log(response.data.favorites);
                // const movies = response.data.favorites;
                // this.setState({ movies, Loading: false });
                // this.setState({ Loading: false });
              } else {
                alert("Failed to get subscription videos");
              }
            });
          // window.location = "/watch-list";
        } else {
          alert("Failed to Remove From Favorite");
          this.setState({ movies: originalMovies, Loading: originalLoading.currentPage=originalCurrentPage });
        }
      });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, movies: allMovies } = this.state;
    const sorted = _.orderBy(allMovies, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return {
      totalCount: allMovies.length,
      data: movies,
    };
  };

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: movies } = this.getPagedData();
  
    return (
      <div className="GlobalContainer mb-3">
        <div className="row p-2 mt-3 m-1 pt-3 bg-light shadow rounded">
          <div className="col">
            <p
              style={{
                color: "#444",
              }}
            >
              {totalCount === 0
                ? "There are no movies in your Watchlist."
                : `Showing ${totalCount} movies in your Watchlist.`}
            </p>

            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WatchList;
