import React, {Fragment, Component} from 'react';
import styled from 'styled-components';
import { withGesture, Gesture } from 'react-with-gesture'
import { Spring, animated, Transition } from 'react-spring'

/* eslint react/prop-types:0 */

const ProfileStyle = styled.div`
  border-radius: 3px;
  margin: 0.5em;
  padding: 0.25em 1em;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

@withGesture
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    

    
    render() {
        const { name, age, breed, location, description } = this.props;
        const { down, x, y, xDelta, yDelta, xInitial, yInitial  } = this.props

        return (
            <ProfileStyle>
                <h1>
                    Temp Styke {name}, {age}
                </h1>
                <h4>{breed} Temp Styke</h4>
                <h5> Location: {location} 6969</h5>
                <h5>{description} Temp Styke</h5>
            </ProfileStyle>
        );
    }
  }
  
  export default Profile;


//   style={{  
//     'background': 'black',
//     'transform': `translate3d(${xDelta}px,${yDelta}px,0px)`,
//     }}