import React, { Fragment } from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  position: relative;
  z-index: 2;
  margin-left: 12%;
  margin-right: 12%;
  margin-top: 40px;
  height: ${window.outerHeight * 0.5}px;
  border-radius: 15px;
  overflow: hidden;
`;

const ImgDiv = styled.div`
  position: relative;
  height: ${window.outerHeight * 0.5}px;
  border-radius: 15px;
  background: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
const Img = styled.img`
  max-width: auto;
  max-height: 100%;
  border-radius: 15px;
`;

/* eslint-disable react/prop-types */
export default ({ pet: { picture, name, age, likeCounter, breed, description, id }, pickPet, togglePopup }) => (
  <Fragment>
    <CardStyle>
      <ImgDiv style={{ backgroundImage: `url(${picture})` }} />
    </CardStyle>
    <li style={{ listStyleType: 'none', color: 'white', paddingTop: '20px', paddingLeft: '12%' }}>
      <span>{`${name}, ${age}, `}</span>
      <span style={{ fontStyle: 'italic' }}>{breed}</span>
      <br />
      <span>{description.length > 40 ? `${description.slice(0, 40)} ...` : description}</span>
      <br />
      <span style={{ fontWeight: 'bold' }}>{`Like Count: ${likeCounter}`}</span>
      <br />
      <button type="button" onClick={() => pickPet({ picture, name, age, breed, description }, id)}>
        Edit
      </button>
    </li>
  </Fragment>
);
