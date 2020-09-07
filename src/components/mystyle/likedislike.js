import styled, { css } from "styled-components";

export const StyledLikeDislikeContainer = styled.div`
  display: flex;
  /* margin-left: 100px; */
  color: #555;
  /* justify-content: space-between; */
  align-items: center;

  ${(props) =>
    props.commentLike === "yes" &&
    css`
      margin-left: 5px;
      align-items: flex-start;
    `};
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;

  ${(props) =>
    props.commentLike === "yes" &&
    css`
      .count {
        color: #666;
        margin-left: 2px;
        font-size: 6px;
      }
      display: block;
      margin: 3px 12px;
    `};

  .count {
    font-size: 15px;
    margin-top: 10px;
  }

  .fa-thumbs-up,
  .fa-thumbs-down {
    cursor: pointer;
    color: #555;
    text-shadow: 1px 4px 10px #999;
    transition: transform 80ms ease-in;
    &:active {
      transform: scale(0.95);
    }
  }

  ${(props) =>
    props.primary === "yes" &&
    css`
      .fa-thumbs-up {
        color: #ff00ff;
      }
    `};

  ${(props) =>
    props.secondary === "yes" &&
    css`
      .fa-thumbs-down {
        color: #ff00ff;
      }
    `};
`;
