import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

export const Nav = styled.nav`
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 500;
  align-items: center;
  box-shadow: 0px 15px 10px -15px #111;
  border-bottom: 3px solid #663399;
  height: 70px;
  color: #444;
  opacity: 0.94;

  .GlobalContainer {
    display: flex;
    justify-content: space-between;
    text-align: center;
    @media screen and (max-width: 680px) {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
  }
  @media screen and (max-width: 680px) {
    text-align: center;
    height: 142px;
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 680px) {
    max-width: 100%;
    align-items: center;
    margin-bottom:2px;
  }

  @media screen and (max-width: 680px) {
    padding: 10px 10px 13px 10px;
  }
`;

export const NavBrand = styled(Link)`
  img {
    width: 180px;
    cursor: pointer;
    object-fit: cover;
    color: #333;
    padding: 6px;
  }
  padding-top: 0px;
  margin-top: 0px;
  text-decoration: none;
  @media screen and (max-width: 680px) {
    margin-top: 10px;
    border-bottom: 1px solid #6633ff;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #333;
  padding: 12px 8px 12px 12px;
  font-weight: bold;
  border-radius: 5px;
  letter-spacing: 0.5px;
  /* overflow: hidden; */

  @media screen and (max-width: 680px) {
    padding: 10px;
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 5px;
    background: #663399;
    -webkit-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }

  &:hover {
    text-decoration: none;
    color: #333;
    opacity: 0.95;
    &::after {
      width: 100%;
    }
  }
`;

export const ProfileButton = styled.div`
  .fa-user {
    margin-right: 3px;
    @media screen and (max-width: 372px) {
      color: #663399;
    }
    @media screen and (max-width: 340px) {
      display: none;
    }
  }

  text-decoration: none;
  cursor: pointer;
  color: #333;
  font-weight: bold;
  border-radius: 10px;
  margin: 0px 5px 10px 10px;
  letter-spacing: 0.5px;
  text-align: center;
  transition: transform 80ms ease-in;
  transition: all 0.3s ease-in;
  overflow: hidden;
  @media screen and (min-width: 372px) {
    border: 2px solid #663399;
    padding: 5px 15px;
    &:hover {
      text-decoration: none;
      background-color: #663399;
      border: 2px solid #663399;
      color: white;
      opacity: 0.8;
      transition: all 0.3s ease-in;
    }
  }

  @media screen and (max-width: 372px) {
    padding-top: 10px;
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      margin-top: 5px;
      background: #663399;
      -webkit-transition: all 0.5s ease-out;
      transition: all 0.5s ease-out;
    }

    &:hover {
      text-decoration: none;
      color: #333;
      opacity: 0.95;
      transition: all 0.3s ease-in;
      &::after {
        width: 100%;
      }
    }
  }
  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const NavItemButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #333;
  padding: 5px 15px;
  font-weight: bold;
  border-radius: 10px;
  margin: 0px 5px 10px 10px;
  border: 2px solid #663399;
  letter-spacing: 0.5px;
  text-align: center;
  transition: transform 80ms ease-in;
  transition: all 0.3s ease-in;

  &:hover {
    text-decoration: none;
    background-color: #663399;
    border: 2px solid #663399;
    color: white;
    opacity: 0.8;
    transition: all 0.3s ease-in;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  /* add additional styled if primary*/
  ${(props) =>
    props.primary &&
    css`
      background-color: #663399;
      color: white;
      &:hover {
        text-decoration: none;
        opacity: 0.9;
        color: #fff;
      }
      @media screen and (max-width: 680px) {
        padding: 5px;
      }
    `}
`;

export const StyledTool = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
  color: #fff;
  .name {
    color: #202124;
    font: 500 16px/22px Google Sans, Roboto, RobotoDraft, Helvetica, Arial,
      sans-serif;
    letter-spacing: 0.29px;
    margin: 0;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .email {
    color: #5f6368;
    font: 400 14px/19px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    letter-spacing: normal;
    text-align: center;
    text-overflow: ellipsis;
    margin-top: 2px;
    overflow: hidden;
  }

  .fa-user {
    border-radius: 50%;
    padding-top: 5px;
    text-align: center;
    color: #fff;
    background: #663399;
    border: none;
    margin-right: 6px;
    margin-bottom: 6px;
    height: 40px;
    width: 40px;
  }
`;

export const WhiteTippy = styled(Tippy)`
  background: white;
  border: 1px solid #eff;
  box-shadow: 1px 8px 14px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  /* Styling the arrow for different placements */
  &[data-placement^="top"] > .tippy-arrow::before {
    border-top-color: white;
  }
`;
