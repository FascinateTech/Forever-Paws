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
<<<<<<< HEAD
  border-bottom: 1px solid white;
  color: 'white';
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  align-items: center;
=======
  border-width: 2px;
  border-color: 'white';
  color: 'white';
  border-style: solid;
  margin-left: 10%;
  margin-right: 10%;
  padding-left: 2%;
  padding-top: 4%;
>>>>>>> 65df241fee95f19f75b2fa40bc3b88a2133740b7
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
<<<<<<< HEAD
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
=======
>>>>>>> 65df241fee95f19f75b2fa40bc3b88a2133740b7
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
<<<<<<< HEAD
        <div style={{ color: 'white', padding: '30px' }}>
=======
        <div style={{ color: 'white', padding: '10%' }}>
>>>>>>> 65df241fee95f19f75b2fa40bc3b88a2133740b7
          <h3>My Profile</h3>
          <h5>Username</h5>
        </div>
        <UserStyle>
          <Field>
<<<<<<< HEAD
            <Link style={{ color: 'white', paddingLeft: '4%' }} to="/mypets">
              <span>My Pets</span>{' '}
            </Link>
          </Field>

          <Field style={{ borderBottom: '0px' }}>
            <Link style={{ color: 'white', paddingLeft: '4%' }} to="/petupload/user">
              <span>Upload Pet</span>{' '}
=======
            <Link to="/mypets">
              <p>My Pets</p>{' '}
            </Link>
          </Field>

          <Field style={{ borderTop: '0px' }}>
            <Link to="/petupload/user">
              <p>Upload Pet</p>{' '}
>>>>>>> 65df241fee95f19f75b2fa40bc3b88a2133740b7
            </Link>
          </Field>

          <Button style={{}}>
            <a href="/auth/logout">
<<<<<<< HEAD
              <span style={{ textAlign: 'center', color: 'purple', fontStyle: 'bold' }}>Logout</span>{' '}
=======
              <p style={{ lineHeight: '30px', textAlign: 'center' }}>Logout</p>{' '}
>>>>>>> 65df241fee95f19f75b2fa40bc3b88a2133740b7
            </a>
          </Button>
        </UserStyle>
      </div>
    );
  }
}
