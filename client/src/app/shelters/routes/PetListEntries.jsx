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
<<<<<<< HEAD
=======
    <th scope="row" />
>>>>>>> 65df241fee95f19f75b2fa40bc3b88a2133740b7
    <Td>{id}</Td>
    <Td>{name}</Td>
    <Td>{breed}</Td>
  </tr>
);
