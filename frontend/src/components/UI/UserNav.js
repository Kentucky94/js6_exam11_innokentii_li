import React from 'react';
import {NavbarText, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const UserNav = props => {
  return (
    <>
      <NavbarText className="mr-2">
        {'Hello, ' + props.user.displayName + '!'}
      </NavbarText>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/items/add">Add new item</NavLink>
      </NavItem>
      <NavbarText className="btn btn-danger" onClick={props.onClick}>
        Logout
      </NavbarText>
    </>
  );
};

export default UserNav;