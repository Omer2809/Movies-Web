import React, { useState } from "react";
import SingleComment from "./SingleComment";
import ReplyComment from "./ReplyComment";
import { toast } from "react-toastify";
import auth from "../services/authService";
import http from "../services/httpService";
import { Button } from "./mystyle/watchlistButton";
import { Link } from 'react-scroll';
import {
  StyledComments,
  StyledTextArea,
  Input,
} from "./mystyle/styledcomments";

function Comments(props) {
  const [Comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (auth.getCurrentUser() === null) {
      return toast.info("Please Log in first");
    }

    const variables = {
      content: Comment,
      writer: auth.getCurrentUser()._id,
      postId: props.postId,
    };
    // console.log(variables);

    http.post("/comment/saveComment", variables).then((response) => {
      if (response.data.success) {
        setComment("");
        props.refreshFunction(response.data.result);
      } else {
        alert("Failed to save Comment");
      }
    });
  };

  return (
    <StyledComments>
      <div className="floatss">
        <div className="subpage_title_block">
          <img className="clickable" src={props.image} alt="moviethumb" />
          <div className="subpage_title_block__right-column">
            <div className="parent">
              <h3>
                {props.movieTitle}
                <span className="nobr">({props.releaseDate&&props.releaseDate.substring(0,4)})</span>
              </h3>
            </div>
            <h2 className="header">User Reviews</h2>
            <p className="xx"><Link to="commentArea" style={{textDecoration:"none",cursor:"pointer"}}> + Add Review</Link></p>
          </div>
        </div>
        <div className="review">
          <span>000{props.CommentLists && props.CommentLists.length}</span> Reviews
        </div>
      </div>
      <div className="belowHeading">
        {props.CommentLists &&
          props.CommentLists.map(
            (comment, index) =>
              !comment.responseTo && (
                <React.Fragment key={Math.random()}>
                  <SingleComment
                    comment={comment}
                    postId={props.postId}
                    refreshFunction={props.refreshFunction}
                  />
                  <ReplyComment
                    CommentLists={props.CommentLists}
                    postId={props.postId}
                    parentCommentId={comment._id}
                    refreshFunction={props.refreshFunction}
                  />
                </React.Fragment>
              )
          )}

        {props.CommentLists && props.CommentLists.length === 0 && (
          <div className="firstComment">
            Be the first one to add review for this movie
          </div>
        )}

        {/* Root Comment Form */}
        <StyledTextArea onSubmit={onSubmit} id="commentArea">
          <div className="input-group">
            <Input
              type="text"
              onChange={handleChange}
              required
              value={Comment}
              id="inputField"
            />
            <label htmlFor="inputField" className="label">
              Add Review
            </label>
          </div>
          <Button submit={"true"} onClick={onSubmit}>
            Submit
          </Button>
        </StyledTextArea>
      </div>
    </StyledComments>
  );
}

export default Comments;
