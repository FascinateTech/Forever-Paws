import React from 'react';
import styled from 'styled-components';

const Button = styled.button` border-radius: 3px;
padding: 0.25em 1em;
margin: 0 1em;
background: transparent;
color: palevioletred;
border: 2px solid palevioletred;`;

function NavBar() {

    
    return(
        <div>
            <Button> Profile </Button>
            <Button> Dog Swipe </Button>
            <Button> Messages </Button>
        </div>
    )
}

export default NavBar;