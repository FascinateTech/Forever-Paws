import React from 'react';
import styled from 'styled-components';

const Td = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

/* eslint-disable react/prop-types */
export default ({ pet: { name, breed, id } }) => (
  <tr>
    <th scope="row" />
    <Td>{id}</Td>
    <Td>{name}</Td>
    <Td>{breed}</Td>
  </tr>
);
