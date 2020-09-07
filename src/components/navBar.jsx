import React, { forwardRef, useState } from "react";
import {
  Nav,
  NavBrand,
  NavItems,
  NavItem,
  NavItemButton,
  ProfileButton,
  StyledTool,
  WhiteTippy,
} from "./mystyle/NavBar";
import Media from "react-media";
import LOGO from "./img/movieslogo1.jpg";
import FontAwesome from "react-fontawesome";

function getUser(name) {
  return (
    <Media query="(max-width:460px)">
      {(matches) => {
        return matches
          ? `${name.length > 4 ? name.substring(0, 4) : name}`
          : `${name.length > 9 ? name.substring(0, 9) : name}`;
      }}
    </Media>
  );
}

const ToolTipChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <ProfileButton onClick={props.visible ? props.hide : props.show}>
        <FontAwesome className="fa-user-circle fa-lg" name="user" />
        {getUser(props.user.name.trim().split(/(?<=^\S+)\s/)[0])}
      </ProfileButton>
    </div>
  );
});

function toolTipContent(user) {
  return (
    <StyledTool>
      <FontAwesome className="fa-user fa-2x" name="user" />
      <div className="name"> {user.name}</div>
      <div className="email"> {user.email}</div>
    </StyledTool>
  );
}

const NavBar = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <Nav>
      <div className="GlobalContainer">
        <NavBrand to="/">
          <img src={LOGO} alt="LOGO" />
        </NavBrand>
        {!user && (
          <NavItems>
            <NavItem to="/watch-list">Watchlist</NavItem>
            <NavItemButton to="/login">Login</NavItemButton>
            <NavItemButton primary="true" to="/register">
              SignUp
            </NavItemButton>
          </NavItems>
        )}
        {user && (
          <NavItems>
            <NavItem to="/watch-list">Watchlist</NavItem>
            <WhiteTippy
              arrow={false}
              visible={visible}
              onClickOutside={hide}
              content={toolTipContent(user)}
            >
              <ToolTipChild
                show={show}
                hide={hide}
                visible={visible}
                user={user}
              />
            </WhiteTippy>
            <NavItemButton primary="true" to="/logout">
              Sign out
            </NavItemButton>
          </NavItems>
        )}
      </div>
    </Nav>
  );
};

export default NavBar;
