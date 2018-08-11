<<<<<<< HEAD
=======
import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileQueue: [
        {
          name: 'peter',
          breed: 'golden corgie',
          description: 'Lets skip the small talk and go for a walk',
          picture: [],
          location: '20057',
        },
      ],
      date: new Date(),
    };
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <Button variant="contained" color="primary">
          Like</Button>
        <Button variant="contained" color="primary">
          Don't Like</Button>
      </div>
    );
  }
}

export default App;
>>>>>>> edits
