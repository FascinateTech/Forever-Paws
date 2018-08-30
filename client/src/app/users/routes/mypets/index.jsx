import React, { Component } from 'react';
import { get } from 'axios';
import NavComponent from '../../navbar/index';
import PetListEntry from './PetListEntry';
import PopupEditor from './PopupEditor';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { myPets: [], popUp: false, petToEdit: {}, petId: 0 };

    this.togglePopup = this.togglePopup.bind(this);
    this.pickPet = this.pickPet.bind(this);
  }

  async componentDidMount() {
    const {
      data: { myPets },
    } = await get('/api/animals/my');
    this.setState({ myPets });
  }

  togglePopup() {
    const { popUp } = this.state;
    this.setState({ popUp: !popUp });
  }

  pickPet(petToEdit, petId) {
    this.setState({ petToEdit, petId });
    this.togglePopup();
  }

  render() {
    const { myPets, popUp, petToEdit, petId } = this.state;
    return (
      <div style={{ backgroundImage: 'linear-gradient(-155deg, #6868fd, #fa85a1)', height: `${70 * myPets.length}vh` }}>
        <NavComponent />
        <h3 style={{ color: 'white', paddingTop: '10%', paddingLeft: '10%' }}>My Pets</h3>
        <ul style={{ padding: '0px' }}>
          {myPets ? (
            myPets.map(pet => <PetListEntry pet={pet} pickPet={this.pickPet} />)
          ) : (
            <h5 style={{ color: 'white', paddingTop: '10%', paddingLeft: '10%' }}>You have no pets :(</h5>
          )}
        </ul>
        {popUp ? <PopupEditor pet={petToEdit} id={petId} togglePopup={this.togglePopup} /> : null}
      </div>
    );
  }
}
