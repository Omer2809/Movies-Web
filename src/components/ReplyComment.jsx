import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

function ReplyComment(props) {
  const [ChildCommentNumber, setChildCommentNumber] = useState(0);
  const [OpenReplyComments, setOpenReplyComments] = useState(false);
  useEffect(() => {
    let commentNumber = 0;
    props.CommentLists.map((comment) => {
      if (comment.responseTo === props.parentCommentId) {
        commentNumber++;
      }
    });
    setChildCommentNumber(commentNumber);
  }, [props.CommentLists, props.parentCommentId]);

  let renderReplyComment = (parentCommentId) =>
    props.CommentLists.map((comment, index) => (
      <React.Fragment key={parentCommentId+comment}>
        {comment.responseTo === parentCommentId && (
          <div style={{ width: "98%", marginLeft: "5px" }}>
            <SingleComment
              comment={comment}
              postId={props.postId}
              refreshFunction={props.refreshFunction}
            />
            <ReplyComment
              CommentLists={props.CommentLists}
              parentCommentId={comment._id}
              postId={props.postId}
              refreshFunction={props.refreshFunction}
            />
          </div>
        )}
      </React.Fragment>
    ));

  const handleChange = () => {
    setOpenReplyComments(!OpenReplyComments);
  };

  function repliess(replies) {
    return replies > 1 ? "replies" : "reply";
  }

  return (
    <div>
      {ChildCommentNumber > 0 && (
        <p
          style={{
            fontSize: "14px",
            margin: "2px 10px",
            color: "#666",
            cursor: "pointer",
          }}
          onClick={handleChange}
        >
          __View {ChildCommentNumber} {repliess(ChildCommentNumber)}
        </p>
      )}

      {OpenReplyComments && renderReplyComment(props.parentCommentId)}
    </div>
  );
}

export default ReplyComment;
