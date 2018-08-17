import React, {Fragment, Component} from 'react';
import styled from 'styled-components';
import { withGesture, Gesture } from 'react-with-gesture'
import { Spring, animated } from 'react-spring'

/* eslint react/prop-types:0 */

function Profile({ props }) {
    const ProfileStyle = styled.div`
      background: lightpink;
      border-radius: 3px;
      margin: 0.5em;
      padding: 0.25em 1em;
      color: palevioletred;
      border: 2px solid palevioletred;
    `;
  
    const { name, age, breed, location, description } = props;
    
    return (
            <ProfileStyle>
                <Gesture props = {props}>
                {({ down, x, y, xDelta, yDelta, xInitial, yInitial }) =>
                <div>
                    <div>Drag me! coordinates: {x}, {y}</div>


                </div>
                }
                </Gesture>
            </ProfileStyle>
    );
  }
  
  export default Profile;



//   <Spring native to={{ x: down ? xDelta : 0 }} immediate={name => down && name === 'x'}>
//   {({ x }) => (
//   <div className="item" style={{ backgroundColor: xDelta < 0 ? '#FF1C68' : '#14D790' }}>

//       <animated.div className="fg" style={{ transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
//       {down && Math.abs(xDelta) > 50 ? (xDelta < 0 ? 'Cancel' : 'Accept') : children}
//       </animated.div>
//   </div>
//   )}
//   </Spring>