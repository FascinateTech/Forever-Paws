import React, { Component } from 'react';
import styled from 'styled-components';
import Password from './PasswordComponent';
import Info from './InfoComponent';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20%;
  margin-right: 20%;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: white;
`;

const Li = styled.li`
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'info',
    };
  }

  changeView(option) {
    this.setState({ view: option });
  }

  renderView() {
    return this.state.view === 'info' ? <Info /> : <Password />;
  }

  render() {
    const { view } = this.state;
    return (
      <Container>
        <div style={{ flex: '3', marginTop: '5%' }}>
          {/* <ul className="nav flex-column nav-pills">
              <li className="nav-item">
                <a
                  className={view === 'info' ? 'nav-link active' : 'nav-link'}
                  href="#"
                  onClick={() => this.changeView('info')}
                >
                  Edit Info
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={view === 'password' ? 'nav-link active' : 'nav-link'}
                  href="#"
                  onClick={() => this.changeView('password')}
                >
                  Change Password
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Logout
                </a>
              </li>
            </ul> */}
          <Ul>
            <Li>
              <a href="#" onClick={() => this.changeView('info')}>
                Edit View
              </a>
            </Li>
            <Li>
              <a href="#" onClick={() => this.changeView('password')}>
                Password
              </a>
            </Li>
            <Li>
              <a href="/">Logout</a>
            </Li>
          </Ul>
        </div>
        <div style={{ flex: '9', marginTop: '5%' }}>
          <div>{this.renderView()}</div>
        </div>
      </Container>
    );
  }
}
