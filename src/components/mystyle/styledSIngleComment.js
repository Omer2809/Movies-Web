import styled from "styled-components";

export const StyledSingleComment = styled.div`
  &:nth-child(odd) {
    background: #f6f6f5;
  }
  &:nth-child(even) {
    background: #fbfbfb;
   
  }
  padding: 10px;
  margin: 10px;
  color: #666;

  .comment-content-author {
    .comment-content-author-name {
      color: #333333;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 5px;
      padding-bottom:5px;
      font-family: Verdana, Arial, sans-serif;
    }
    margin: 1px;
    padding: 2px;
    border-bottom: 1px solid #999;
  }

  .fa-user-circle {
    color: #663399;
    margin:0px 5px;
  }

  .comment-content-detail {
    color: #444;
    font-family: Verdana, Arial, sans-serif;
    font-size: 13px;
    padding: 3px;
  }

  .comment-actions {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 2px;
    .reply{
      font-size: 15px;
      cursor: pointer;
      color: #444;
      margin-left:10px;
    }
  }
 
`;
