import React from 'react';
import {NavbarText, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const UserNav = props => {
  return (
    <>
      <NavbarText>
        {'Hello, ' + props.user.username + '!'}
      </NavbarText>
      <NavbarText onClick={props.onClick}>
        Logout
      </NavbarText>
    </>
  );
};

export default UserNav;