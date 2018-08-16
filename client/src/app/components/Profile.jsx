<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components';

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
      <h1>
        {name}, {age}
      </h1>
      <h4>{breed} </h4>
      <h5> Location: {location}</h5>
      <h5>{description} </h5>
    </ProfileStyle>
  );
}

export default Profile;
=======
=======
import React, {Fragment} from 'react';
import styled from 'styled-components';


function Profile({props}) {
    
    const ProfileStyle = styled.div`
    background: gray;
    border-radius: 15px;
    margin: .5em;
    color: palevioletred;
    border: 2px solid palevioletred;`;
>>>>>>> ed edits

    return(
        <ProfileStyle>
            <h1>{props.name}, {props.age}</h1>
            <h4>{props.breed} </h4>
            <h5> Location: {props.location}</h5>
            <h5>{props.description} </h5>
        </ProfileStyle>
    );
}

export default Profile;
>>>>>>> progress css
