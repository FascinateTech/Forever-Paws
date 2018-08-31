import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';

/* eslint react/prop-types:0 */

const ImgDiv = styled.div`
  position: relative;
  height: ${window.outerHeight * 0.3}px;
  border-radius: 15px;
  background: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-top: 15px;
`;
const Img = styled.img`
  max-width: auto;
  max-height: 100%;
  border-radius: 15px;
`;
const PDiv = styled.div`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const PDivInner = styled.div`
  position: relative;
  width: 350px;
  height: 550px;
  margin: auto;
  margin-top: 75px;
  padding: 30px;
  border-radius: 10px;
  background: white;
  color: green;
`;
const Button = styled.button`
  position: 'relative';
  float: 'right';
  margin-right: 1em;
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  color: red;
  border: 2px solid red;
`;

const ProfileStyle = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 4%;
  color: green;
  margin-bottom: 15px;
`;

const P = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  margin: 0;
  font-weight: 100;
`;
const Span = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  margin: 0;
  font-weight: 100;
`;
const P1 = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  font-weight: 100;
  margin: 0;
`;

export default function({ previousProfileView, togglePopup }) {
  return (
    <PDiv onClick={() => togglePopup(false)}>
      <PDivInner onClick={e => e.stopPropagation()}>
        <h1>Its a Match!</h1>
        <h5>This pet is availble for adoption:</h5>
        {previousProfileView ? (
          <div>
            {Math.floor(previousProfileView.distance * 0.000621371)} miles away
            <br />
            <a href={`https://${previousProfileView.website}`} rel="noopener noreferrer" target="_blank">
              Shelter
              {`'`}s website
            </a>
            <ImgDiv style={{ backgroundImage: `url(${previousProfileView.picture})` }} />
            {/* <Img alt="dog" src={previousProfileView.picture} /> */}
            {/* </ImgDiv> */}
            <ProfileStyle>
              <P1>
                {previousProfileView.name}, {previousProfileView.age}
              </P1>
              <Span style={{ float: 'left', 'font-style': 'italic' }}>{previousProfileView.breed}</Span>{' '}
              {/* <Span style={{ float: 'right' }}>zip: {location} </Span> */}
              <br />
              <P>{`"${previousProfileView.description}"`}</P>
            </ProfileStyle>
          </div>
        ) : null}
        <Button type="button" onClick={() => togglePopup(false)}>
          Cancel
        </Button>
      </PDivInner>
    </PDiv>
  );
}
