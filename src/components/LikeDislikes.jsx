import React, { useEffect, useState } from "react";
import auth from "../services/authService";
import http from "../services/httpService";
import { toast } from "react-toastify";
import FontAwesome from "react-fontawesome";
import {
  StyledLikeDislikeContainer,
  LikeContainer,
} from "./mystyle/likedislike";

function LikeDislikes(props) {
  const [Likes, setLikes] = useState(0);
  const [Dislikes, setDislikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [DislikeAction, setDislikeAction] = useState(null);
  let variable = {};
  const user = auth.getCurrentUser();
  let userId;
  if (user !== null) {
    userId = user._id;
  }

  if (props.video) {
    variable = { videoId: props.videoId, userId: userId };
  } else {
    variable = { commentId: props.commentId, userId: userId };
  }

  useEffect(() => {
    http.post(`/like/getLikes`, variable).then((response) => {
     

      if (response.data.success) {
        //How many likes does this video or comment have
        setLikes(response.data.likes.length);

        //if I already click this like button or not
        response.data.likes.map((like) => {
          if (like.userId === userId) {
            setLikeAction("liked");
          }
        });
      } else {
        alert("Failed to get likes");
      }
    });

    http.post(`/like/getDislikes`, variable).then((response) => {
      // console.log("getDislike", response.data);
      if (response.data.success) {
        //How many likes does this video or comment have
        setDislikes(response.data.dislikes.length);

        //if I already click this like button or not
        response.data.dislikes.map((dislike) => {
          if (dislike.userId === userId) {
            setDislikeAction("disliked");
          }
        });
      } else {
        alert("Failed to get dislikes");
      }
    });
  });

  const onLike = () => {
    if (user === null) {
      return toast.info("Please Log in first");
    }
    if (LikeAction === null) {
      http.post(`/like/upLike`, variable).then((response) => {
        if (response.data.success) {
          setLikes(Likes + 1);
          setLikeAction("liked");

          //If dislike button is already clicked

          if (DislikeAction !== null) {
            setDislikeAction(null);
            setDislikes(Dislikes - 1);
          }
        } else {
          alert("Failed to increase the like");
        }
      });
    } else {
      http.post(`/like/unLike`, variable).then((response) => {
        if (response.data.success) {
          setLikes(Likes - 1);
          setLikeAction(null);
        } else {
          alert("Failed to decrease the like");
        }
      });
    }
  };

  const onDisLike = () => {
    if (user === null) {
      return toast.info("Please Log in first");
    }

    if (DislikeAction !== null) {
      http.post(`/like/unDisLike`, variable).then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes - 1);
          setDislikeAction(null);
        } else {
          alert("Failed to decrease dislike");
        }
      });
    } else {
      http.post(`/like/upDisLike`, variable).then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes + 1);
          setDislikeAction("disliked");

          //If dislike button is already clicked
          if (LikeAction !== null) {
            setLikeAction(null);
            setLikes(Likes - 1);
          }
        } else {
          alert("Failed to increase dislike");
        }
      });
    }
  };
  // const icon = "fa-thumbs-up";

  return (
    <StyledLikeDislikeContainer commentLike={props.commentLike}>
      <LikeContainer
        primary={LikeAction === "liked" ? "yes" : "No"}
        commentLike={props.commentLike}
      >
        <FontAwesome
          className="fa-thumbs-up"
          name="like"
          onClick={onLike}
          size={props.commentLike === "yes" ? "lg" : "2x"}
        />
        <span className="count">{Likes}</span>
      </LikeContainer>

      <LikeContainer
        secondary={DislikeAction === "disliked" ? "yes" : "No"}
        commentLike={props.commentLike}
      >
        <FontAwesome
          className="fa-thumbs-down"
          name="dislike"
          onClick={onDisLike}
          size={props.commentLike === "yes" ? "lg" : "2x"}
        />

        <span className="count">{Dislikes}</span>
      </LikeContainer>
    </StyledLikeDislikeContainer>
  );
}

export default LikeDislikes;
