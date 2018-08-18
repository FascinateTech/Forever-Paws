import React, { Fragment } from 'react';
import styled from 'styled-components';
// import logo from '../../Images/pawLogo.svg';


const Header = styled.header`
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  flex: 1;
  backround: black;
  height: 50px;
  width: 100%;
  background-color: #ffb3da;
`;

const Nav = styled.nav`
  color: palevioletred;
  height: 50px;
`;
const NavComponent = () => (
  <Fragment>
    <Header>
      <Nav>
        <img src={logo} alt="paws" />
      </Nav>
    </Header>
  </Fragment>
);

export default NavComponent;
