import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  background: #ff00ff;
  width: 25%;
  min-width: 100px;
  height: 60px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 30px;
  font-family: "Abel", sans-serif;
  font-size: 28px;
  display: block;
  margin: 30px auto;
  margin-bottom:10px;
  padding: 0 20px;
  outline: none;
  border: 1px solid #663399;
  box-shadow: 2px 15px 10px -15px #111;
  transition: transform 80ms ease-in;
  text-align: center;
  opacity: 0.95;

  @media (max-width:600px){
    border: 1px solid #663399;
    border-radius: 5px;
    margin: 15px auto;
    font-size: 16px;
    letter-spacing: 0.5px;
    padding: 7px 10px;
    height:45px;
    text-align: center;
  }

  &:hover {
    opacity: 0.85;
    color: #fff;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;
