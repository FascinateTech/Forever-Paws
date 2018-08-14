import React from 'react';

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
    return (
        <div draggable style={{
            margin: '5px',
            border: '1px solid red',
            transform: 'translateY() scale(0.75)'       
            }}>
        <h1>{profileQueue.name}</h1>
        <img width="100%" alt="dog" src={profileQueue.picture} />
        <h3>Breed: {profileQueue.breed} </h3>
        <h3>Age: {profileQueue.age} </h3>
        <h3>{profileQueue.description} </h3>
        </div>
    );  
}

// CardStack.propTypes = {
//     profileQueue: PropTypes.element.isRequired
//   };

export default CardStack;

>>>>>>> partial compleation
