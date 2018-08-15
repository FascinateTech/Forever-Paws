<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';

/* eslint react/prop-types:0 */

function BottomLaunchpad(props) {
  const LaunchpadStyle = styled.div`
=======
import React from 'react'
import styled from 'styled-components'

function BottomLaunchpad(props) {
    
    const LaunchpadStyle = styled.div`
>>>>>>> ed edits
    align-items: center;
    border-radius: 3px;
    padding: 0.25em 1em;
    background: white;
    color: palevioletred;
<<<<<<< HEAD
    border: 2px solid palevioletred;
  `;

  const Button = styled.button`
    border-radius: 3px;
=======
    border: 2px solid palevioletred;`;
    
    const Button = styled.button` border-radius: 3px;
>>>>>>> ed edits
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
<<<<<<< HEAD
    border: 2px solid palevioletred;
  `;

  const { nextPet } = props;

  return (
    <LaunchpadStyle>
      <Button type="submit" onClick={nextPet}>
        {`Don't Like`}
      </Button>
      <Button type="submit" onClick={nextPet}>
        Like
      </Button>
    </LaunchpadStyle>
  );
}

export default BottomLaunchpad;
=======
    border: 2px solid palevioletred;`;
    
    return (
        <LaunchpadStyle>
            <Button type='submit' onClick={props.nextPet}>
                {`Don't Like`}
            </Button>
            <Button type='submit' onClick={props.nextPet}>
                Like
            </Button> 
        </LaunchpadStyle>
    );
}

export default BottomLaunchpad;
>>>>>>> ed edits
