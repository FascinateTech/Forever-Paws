<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;
const LandingPage = () => (
  <div style={{ textAlign: 'center' }}>
    <Link to="/pets">
      <Button type="button">Pets</Button>
    </Link>
  </div>
);

export default LandingPage;
=======
import React, {Component} from 'react';
import styled from 'styled-components';
=======
import React, {Component} from 'react'
import styled from 'styled-components'
>>>>>>> progress css


import NavBar from './NavBar'
import CardStack from './CardStack';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileQueue: [
        {
          name: 'Peter',
          breed: 'golden corgie',
          age: '3 years old',
          description: 'Lets skip the small talk and go for a walk',
          picture: ['https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg','https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg','https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg','https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'],
          location: '20057',
        }, 
        {
          name: 'Bones',
          breed: 'bulldog',
          age: '2 years old',
          description: 'Lets play fetch',
          picture: ['https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'],
          location: '45693',
        }, 
        {
          name: 'Rover',
          breed: 'golden corgie',
          age: '1 years old',
          description: 'Cute and fluffy',
          picture: ['https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'],
          location: '82179',
        }, 
        {
          name: 'Spot',
          breed: 'pug',
          age: '5 years old',
          description: 'Friendly and playful',
          picture: ['https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'],
          location: '90210',
        },
        {
          name: 'Last Dog',
          breed: 'Last Dog',
          age: 'Last Dog',
          description: 'Last Dog',
          picture: ['https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'],
          location: 'Last Dog',
        }
      ],
      date: new Date(),
      currentProfileIndex: 0,
      currentProfileView: {}
    };

    this.nextPet = this.nextPet.bind(this);

  }

  componentDidMount() {
    this.nextPet();
  }

  nextPet () { 
    const {profileQueue, currentProfileIndex} = this.state;
    this.setState({
      currentProfileView: profileQueue[currentProfileIndex],
      currentProfileIndex: currentProfileIndex+1
    })
  }


  render() {
  const {date, currentProfileView} = this.state;

  const Button = styled.button` border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;`;
  
    return (
        <div>
          <NavBar />
          <h2>Doggie Swipe {date.toLocaleTimeString()}.</h2>
          <CardStack profileQueue={currentProfileView}/>
          <Button type='submit' onClick={this.nextPet}>
            {`Don't Like`}
          </Button>
          <Button type='submit' onClick={this.nextPet}>
            Like
          </Button>
        </div>
    );
  }
}

export default LandingPage;

>>>>>>> partial compleation
