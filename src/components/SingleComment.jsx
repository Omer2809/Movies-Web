import React, { useState } from "react";
import auth from "../services/authService";
import http from "../services/httpService";
import LikeDislikes from "./LikeDislikes";
import FontAwesome from "react-fontawesome";
import { StyledSingleComment } from "./mystyle/styledSIngleComment";
import { StyledTextArea, Input } from "./mystyle/styledcomments";
import { Button } from "./mystyle/watchlistButton";
import { toast } from 'react-toastify';

function SingleComment(props) {
  const [CommentValue, setCommentValue] = useState("");
  const [OpenReply, setOpenReply] = useState(false);
  let userId;
  if (auth.getCurrentUser() !== null) userId = auth.getCurrentUser()._id;

  const handleChange = (e) => {
    setCommentValue(e.currentTarget.value);
  };

  const openReply = () => {
    setOpenReply(!OpenReply);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      writer: userId,
      postId: props.postId,
      responseTo: props.comment._id,
      content: CommentValue,
    };

    http.post(`/comment/saveComment`, variables).then((response) => {
      if (response.data.success) {
        setCommentValue("");
        setOpenReply(!OpenReply);
        props.refreshFunction(response.data.result);
      } else {
        toast.warn("Failed to save Comment");
      }
    });
  };

  return (
    <StyledSingleComment>
      <div className="comment-content">
        <div className="comment-content-author">
          <FontAwesome
            className="fa-user-circle"
            name="user"
            // onClick={onLike}
            size="2x"
          />
          <span className="comment-content-author-name">
            {props.comment.writer && props.comment.writer.name}
          </span>
        </div>
        <div className="comment-content-detail">
          <p>{props.comment.content}</p>
        </div>
        <ul className="comment-actions">
          <li>
            <LikeDislikes
              comment
              commentId={props.comment._id}
              commentLike="yes"
              userId={userId}
            />
          </li>
          <li>
            <span
              onClick={openReply}
              className="reply"
              key="comment-basic-reply-to"
            >
              Reply
            </span>
          </li>
        </ul>
      </div>
      {OpenReply && (
        <StyledTextArea onSubmit={onSubmit}>
          <div className="input-group">
            <Input
              type="text"
              onChange={handleChange}
              required
              value={CommentValue}
              id="inputField"
            />
            <label htmlFor="inputField" className="label">
              Add Reply
            </label>
          </div>
          <Button submit={"true"} onClick={onSubmit}>
            Submit
          </Button>
        </StyledTextArea>
      )}
    </StyledSingleComment>
  );
}

export default SingleComment;
