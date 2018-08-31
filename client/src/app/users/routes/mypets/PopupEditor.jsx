import React, { Component } from 'react';
import { patch } from 'axios';
import styled from 'styled-components';

const ImgDiv = styled.div`
  position: relative;
  height: ${window.outerHeight * 0.3}px;
  border-radius: 15px;
  background: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
const Img = styled.img`
  max-width: auto;
  max-height: 100%;
  border-radius: 15px;
`;
const PDiv = styled.div`
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const PDivInner = styled.div`
  position: relative;
  width: 350px;
  height: 650px;
  margin: auto;
  margin-top: 75px;
  padding: 30px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.7);
`;

export default class extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable react/prop-types */
    const { pet } = this.props;
    this.state = pet;

    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async save() {
    const { togglePopup, id } = this.props;
    await patch(`/api/animal/${id}`, this.state);
    togglePopup();
  }

  render() {
    const { togglePopup } = this.props;
    const { picture, age, description, breed, name } = this.state;
    return (
      <PDiv onClick={togglePopup}>
        <PDivInner onClick={e => e.stopPropagation()}>
          <ImgDiv style={{ backgroundImage: `url(${picture})` }} />
          <form style={{ color: 'white', marginTop: '30px' }}>
            Name:
            <br />
            <input style={{ marginBottom: '10px' }} type="text" name="name" value={name} onChange={this.onChange} />
            <br />
            Age:
            <br />
            <input style={{ marginBottom: '10px' }} type="text" name="age" value={age} onChange={this.onChange} />
            <br />
            Breed:
            <br />
            <input style={{ marginBottom: '10px' }} type="text" name="breed" value={breed} onChange={this.onChange} />
            <br />
            Description:
            <br />
            <textarea
              style={{ marginBottom: '10px' }}
              type="text"
              name="description"
              value={description}
              onChange={this.onChange}
            />
            <br />
            <button style={{ backgroundColor: 'white' }} type="submit" onClick={this.save}>
              Save
            </button>
            <button style={{ backgroundColor: 'white' }} type="button" onClick={togglePopup}>
              Cancel
            </button>
          </form>
        </PDivInner>
      </PDiv>
    );
  }
}
