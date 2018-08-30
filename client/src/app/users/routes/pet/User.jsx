import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavComponent from '../../navbar/index';

/* eslint react/prop-types:0 */
const UserStyle = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  color: white;
`;

const Field = styled.div`
  position: relative;
  width: 80%;
  height: 10%;
  border-width: 2px;
  border-color: 'white';
  color: 'white';
  border-style: solid;
  margin-left: 10%;
  margin-right: 10%;
  padding-left: 2%;
  padding-top: 4%;
`;

const Button = styled.div`
  position: fixed;
  bottom: 0;
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 10%;
  width: 50%;
  border-width: 2px;
  border-color: white;
  border-style: solid;
  border-radius: 10px;
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { profile } = this.props;

    return (
      <div style={{ 'background-image': 'linear-gradient(-155deg, #6868fd, #fa85a1)', height: '100vh' }}>
        <NavComponent />
        <div style={{ color: 'white', padding: '10%' }}>
          <h3>My Profile</h3>
          <h5>Username</h5>
        </div>
        <UserStyle>
          <Field>
            <Link to="/mypets">
              <p>My Pets</p>{' '}
            </Link>
          </Field>

          <Field style={{ borderTop: '0px' }}>
            <Link to="/petupload/user">
              <p>Upload Pet</p>{' '}
            </Link>
          </Field>

          <Button style={{}}>
            <a href="/auth/logout">
              <p style={{ lineHeight: '30px', textAlign: 'center' }}>Logout</p>{' '}
            </a>
          </Button>
        </UserStyle>
      </div>
    );
  }
}
