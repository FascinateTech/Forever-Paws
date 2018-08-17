import React, {Fragment} from 'react';
import styled from 'styled-components';
import { Gesture } from 'react-with-gesture'

import Profile from './Profile';
/* eslint react/prop-types:0 */


function CardStack({ profileQueue }) {
  const CardStyle = styled.div`
    border-radius: 15px;
    margin: 0.5em 0em 0.5em 0em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
  `;

  const ImgDiv = styled.div`
    position: relative;
  `;
  const Img = styled.img`
    width: 100%;
    height: auto;
  `;

  return (
    <Fragment>
      <CardStyle>
          <ImgDiv>
            <Img alt="dog" src={profileQueue.picture} />
          </ImgDiv>
          <Profile props={profileQueue} />

      </CardStyle>
    </Fragment>
  );
}

// CardStack.propTypes = {
//     profileQueue: PropTypes.element.isRequired
//   };

export default CardStack;
