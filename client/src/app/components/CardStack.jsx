import React from 'react';
import styled from 'styled-components'

<<<<<<< HEAD
<<<<<<< HEAD:client/src/app/components/petProfile.jsx
<<<<<<< HEAD
/* eslint react/prop-types:0 */
function PetProfile(props) {
  const { profileQueue } = props;
  return (
    <div
      draggable
      style={{
        margin: '5px',
        border: '1px solid red',
        transform: 'translateY() scale(0.75)',
      }}
    >
      <h1>{profileQueue.name}</h1>
      <img width="100%" alt="dog" src={profileQueue.picture} />
      <h3>Breed: {profileQueue.breed} </h3>
      <h3>Age: {profileQueue.age} </h3>
      <h3>{profileQueue.description} </h3>
    </div>
  );
}

// PetProfile.propTypes = {
//   profileQueue: PropTypes.object.isRequired,
// };

export default PetProfile;
=======
function PetProfile(props) {
=======
function CardStack(props) {
>>>>>>> progress css:client/src/app/components/CardStack.jsx
    const {profileQueue} = props;
=======
import Profile from './Profile'

function CardStack({profileQueue}) {
    
    const CardStyle = styled.div`
    display: flex;
    overflow: hidden;
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
    border-radius: 15px;
    margin: 100px 0em 100px 0em;
    background: lightblue;
    color: palevioletred;
    border: 2px solid palevioletred;`;
    
    
    const ImgDiv = styled.div`
    position: relative;
    `
    const Img = styled.img`
    width: 100%;
    height: auto;
    display: flex;
    `
    
>>>>>>> ed edits
    return (
        <CardStyle>
            <ImgDiv>
                <Img alt="dog" src={profileQueue.picture} />
            </ImgDiv>
        <Profile props = {profileQueue}/>
        </CardStyle>
    );  
}

// CardStack.propTypes = {
//     profileQueue: PropTypes.element.isRequired
//   };

<<<<<<< HEAD
export default CardStack;

>>>>>>> partial compleation
=======
export default CardStack;
>>>>>>> ed edits
