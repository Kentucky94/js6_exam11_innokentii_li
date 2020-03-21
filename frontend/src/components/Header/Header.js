import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../store/actions/usersActions";

const Header = () => {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RouterNavLink} to="/" className='mr-auto'>Forum App</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavbarText style={{'display': !!user.username ? 'block' : 'none'}}>
            {'Hello, ' + user.username + '!'}
          </NavbarText>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/login">Login</NavLink>
          </NavItem>
          <NavbarText onClick={() => dispatch(logoutUser())}>
            Logout
          </NavbarText>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;