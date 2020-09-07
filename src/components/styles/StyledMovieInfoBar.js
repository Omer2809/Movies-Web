import styled from "styled-components";

export const StyledMovieInfoBar = styled.div`
  background-color: rgba(158, 150, 160, 0.1);
  box-shadow: 0px 15px 10px -15px #111;
  color: #333;
  padding: 0.95rem 0.2rem;
  font-weight: bold;

  h4 {
    font-size: 20px;
    padding: 0px 5px;
    span {
      margin: 4px;
      font-size: 18px;
      font-weight: none;
      color: #555;
    }
    @media screen and (max-width: 500px) {
      padding-left: 10px;
      font-size: 18px;
      span {
        font-size: 18px;
        margin: 3px;
      }
    }
  }

  .text-center {
    text-align: center;
  }

  .text-primaryy {
    color: #663399;
  }

  .itemss {
    display: flex;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .itemss .itemm {
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
    /* padding: 0.2rem; */
    margin: 5px;
  }

  .itemss .itemm .fa-time,
  .fa-revenue,
  .fa-budget {
    background: #663399;
    color: #fff;
    padding: 0.7rem;
    border-radius: 50%;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    margin: 0px 2px 6px 0px;
    @media screen and (max-width: 600px) {
      padding: 0;
      border-radius: none;
      color: #663399;
      box-shadow: 0 0 0 #fff;
      text-shadow: 2px 10px 10px #677;
      background: transparent;
      margin-bottom: 0.3rem;
    }
  }
  .itemss .itemm .fa-budget {
    margin-left: 25px;
    @media screen and (max-width: 600px) {
      margin:0px 2px 6px 0px;
    }
  }

  .itemss .itemm .fa-time {
    margin-left:50px;
    @media screen and (max-width: 600px) {
      margin-left: 3px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0.7rem;
  }
`;
