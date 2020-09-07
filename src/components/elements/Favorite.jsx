import React, { useEffect, useState } from "react";

import auth from "../../services/authService";
import http from "../../services/httpService";

import { Button } from "./../mystyle/watchlistButton";
import { toast } from "react-toastify";
import FontAwesome from "react-fontawesome";


function watchlist(Favorited, onClickFavorite, infoPage1) {
  return !Favorited ? (
    <Button primary infoPage={infoPage1} onClick={onClickFavorite}>
      <FontAwesome className="fas fa-plus" name="pluse"></FontAwesome> Watchlist
    </Button>
  ) : (
    <Button secondary infoPage={infoPage1} onClick={onClickFavorite}>
      <FontAwesome className="fas fa-check " name="check"></FontAwesome> Watchlist
    </Button>
  );
}

function Favorite(props) {
  const user = auth.getCurrentUser();
  let userFrom;
  
  const movieId = props.movieId;
  const movieTitle = props.movie.original_title;
  const moviePost = props.movie.backdrop_path;
  const movieRunTime = props.movie.vote_average;
  const popularity = props.movie.popularity;
  const releaseDate = props.movie.release_date;
  
  if (user !== null) {
    userFrom = user._id;
  }

  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);
  const variables = {
    movieId: movieId,
    userFrom: userFrom,
    movieTitle: movieTitle,
    moviePost: moviePost,
    movieRunTime: movieRunTime,
    popularity: popularity,
    releaseDate: releaseDate,
  };

  const onClickFavorite = () => {
    if (user === null) {
      return toast.info("Please Log in first");
    }
    if (Favorited) {
      //when we are already subscribed
      http
        .post("/favorite/removeFromFavorite", variables)
        .then((response) => {
          if (response.data.success) {
            setFavoriteNumber(FavoriteNumber - 1);
            setFavorited(!Favorited);
          } else {
            alert("Failed to Remove From Favorite");
          }
        });
    } else {
      // when we are not subscribed yet

      http
        .post("/favorite/addToFavorite", variables)
        .then((response) => {
          if (response.data.success) {
            setFavoriteNumber(FavoriteNumber + 1);
            setFavorited(!Favorited);
          } else {
            alert("Failed to Add To Favorite");
          }
        });
    }
  };

  useEffect(() => {
    http
      .post("/favorite/favoriteNumber", variables)
      .then((response) => {
        if (response.data.success) {
          setFavoriteNumber(response.data.subscribeNumber);
        } else {
          alert("Failed to get Favorite Number");
        }
      });

    http.post("/favorite/favorited", variables).then((response) => {
      if (response.data.success) {
        setFavorited(response.data.subcribed);
      } else {
        alert("Failed to get Favorite Information");
      }
    });
  });

  return (
    <>
      {watchlist(Favorited, onClickFavorite, props.infoPage)}
    </>
  );
}

export default Favorite;
