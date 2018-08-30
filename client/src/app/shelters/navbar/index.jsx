import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
`;

const Li = styled.li`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export default () => (
  <header>
    <nav>
      <Ul>
        <Li style={{ float: 'right' }}>
          <Link to="/petupload/shelter">Add Pet</Link>
        </Li>
        <Li style={{ float: 'right' }}>
          <Link to="/orgpets">Pets</Link>
        </Li>
        <Li style={{ float: 'right' }}>
          <Link to="/account">Account</Link>
        </Li>
        <Li style={{ float: 'left' }}>
          <Link to="/">Paws</Link>
        </Li>
      </Ul>
    </nav>
  </header>
);
