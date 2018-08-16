import React from 'react';
// import styled from 'styled-components';
import { Container } from 'styled-container-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

// const Nav = styled.a`
//   position: fixed;
//   width: 100%;
//   backround: black;
//   height: 56px;
// `;
const NavComponent = () => (
  <Container fluid>
    <Navbar expandSm light>
      <Nav justified>
        <NavbarLink>
          <span>&#9776;</span>
        </NavbarLink>
        <NavbarLink light href="/">
          Forever Paws
          {/* <img src="./pawLogo.svg" alt="paw" /> */}
        </NavbarLink>
        <NavbarLink light href="userProfile">
          Your Profile
        </NavbarLink>
      </Nav>
    </Navbar>
  </Container>
);

export default NavComponent;
