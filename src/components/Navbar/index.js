import React from 'react';
import { Nav, NavIcon, Bars, NavLink } from './Navbar';

const Navbar = ({toggle}) => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Parjanay's Bakehouse</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </div>
  )
}

export default Navbar;
