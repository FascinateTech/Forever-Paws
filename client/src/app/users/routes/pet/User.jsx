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
  border-bottom: 1px solid white;
  color: 'white';
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  align-items: center;
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
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
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
        <div style={{ color: 'white', padding: '30px' }}>
          <h3>My Profile</h3>
          <h5>Username</h5>
        </div>
        <UserStyle>
          <Field>
            <Link style={{ color: 'white', paddingLeft: '4%' }} to="/mypets">
              <span>My Pets</span>{' '}
            </Link>
          </Field>

          <Field style={{ borderBottom: '0px' }}>
            <Link style={{ color: 'white', paddingLeft: '4%' }} to="/petupload/user">
              <span>Upload Pet</span>{' '}
            </Link>
          </Field>

          <Button style={{}}>
            <a href="/auth/logout">
              <span style={{ textAlign: 'center', color: 'purple', fontStyle: 'bold' }}>Logout</span>{' '}
            </a>
          </Button>
        </UserStyle>
      </div>
    );
  }
}
