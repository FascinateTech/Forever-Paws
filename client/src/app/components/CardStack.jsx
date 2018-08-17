import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import { withGesture, Gesture } from 'react-with-gesture'

import Profile from './Profile';
/* eslint react/prop-types:0 */

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

@withGesture
class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  handleMouseMove(){
    const {xDelta} = this.props;

    if(xDelta>60) {
      nextPet();
    }
  }

  render() {
    const { down, x, y, xDelta, yDelta, xInitial, yInitial  } = this.props
    const { nextPet } = this.props;


    return (
      <Fragment>
        <CardStyle style={{  
                'background': 'black',
                'transform': `translate3d(${xDelta}px,${yDelta}px,0px)`,
                }}>
            <ImgDiv>
              <Img alt="dog" src={this.props.profileQueue.picture} />
            </ImgDiv>
            <Profile props={this.props.profileQueue} />
  
        </CardStyle>
      </Fragment>
    );
  }
}

// CardStack.propTypes = {
//     profileQueue: PropTypes.element.isRequired
//   };

export default CardStack;
