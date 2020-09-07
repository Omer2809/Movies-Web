import styled from "styled-components";

export const StyledNavigation = styled.div`
  width: 100%;
  height: 60px;
  background: #663399;
  color: #fff;

  .navigation-content {
    margin: 0;
    padding: 10px 20px 0px 20px;
    @media screen and (max-width: 540px) {
      padding: 0px 0px 0px 0px;
    }

    p {
      font-family: "Abel", sans-serif;
      font-size: 25px;
      float: left;
      color: #fff;
      padding-right: 10px;
      text-decoration: none;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
    .homeLink {
      &:hover {
        color: #ff00ff;
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;
