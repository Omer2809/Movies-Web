import React from "react";
import { useState, useEffect } from "react";

// Components
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";
import Comments from "./Comments";
import LikeDislikes from "./LikeDislikes";

import { useMovieFetch } from "./hooks/useMovieFetch";
import { Button } from "./mystyle/FormStyling";
import http from "../services/httpService";
import NoImage from "./images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { BelowContainer } from "./mystyle/StyledMovies";

const Movie = (props) => {
  const movieId = props.match.params.id;
  const [ActorToggle, setActorToggle] = useState(false);
  const [CommentLists, setCommentLists] = useState([]);
  const [movie, loading, error] = useMovieFetch(movieId);
  const movieVariable = {
    movieId: movieId,
  };

  useEffect(() => {
    http
      .post("/comment/getComments", movieVariable)
      .then((response) => {
        if (response.data.success) {
          setCommentLists(response.data.comments);
        } else {
          alert("Failed to get comments Info");
        }
      });
  }, []);

  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  const toggleActorView = () => {
    setActorToggle(!ActorToggle);
  };

  const updateComment = (newComment) => {
    setCommentLists(CommentLists.concat(newComment));
  };

  return (
    <>
      <Navigation movie={movie} />
      <MovieInfo movie={movie} movieId={movieId} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <div className="GlobalContainer">
        <BelowContainer>
          <LikeDislikes video videoId={movieId} />
          <Button toggle onClick={toggleActorView}>
            Toggle Actor View{" "}
          </Button>
        </BelowContainer>
        {ActorToggle && (
          <Grid header="Actors">
            {movie.actors.map((actor) => (
              <Actor key={actor.credit_id} actor={actor} />
            ))}
          </Grid>
        )}

        {/* Comments */}
        <Comments
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          releaseDate={movie.release_date}
          movieTitle={movie.original_title}
          CommentLists={CommentLists}
          postId={movieId}
          refreshFunction={updateComment}
        />
      </div>
    </>
  );
};

export default Movie;
