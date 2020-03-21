import React from 'react';
import {NavbarText} from "reactstrap";

const UserNav = props => {
  return (
    <>
      <NavbarText className="mr-2">
        {'Hello, ' + props.user.displayName + '!'}
      </NavbarText>
      <NavbarText className="btn btn-danger" onClick={props.onClick}>
        Logout
      </NavbarText>
    </>
  );
};

export default UserNav;