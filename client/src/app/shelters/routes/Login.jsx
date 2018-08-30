import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { post } from 'axios';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
`;

const Li = styled.li`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { website: '', password: '' };

    this.handleLogin = this.handleLogin.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: value });
  }

  async handleLogin() {
    try {
      await post('/auth/shelter/login', this.state);
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }

  render() {
    const { website, password } = this.state;
    return (
      <Fragment>
        <header>
          <nav>
            <Ul>
              <Li style={{ float: 'right' }}>
                <Link to="/petupload/shelter">Add Pet</Link>
              </Li>
              <Li style={{ float: 'right' }}>
                <Link to="/pwpets">Pets</Link>
              </Li>
              <Li style={{ float: 'right' }}>
                <Link to="/account">Account</Link>
              </Li>
              <Li style={{ float: 'left' }}>
                <Link to="/">Paws</Link>
              </Li>
            </Ul>
          </nav>
        </header>
        <Container>
          {/* <div className="col">
                <div className="card mt-5">
                  <div className="card-body">
                    <div>
                      <h5 className="card-title mb-5">Login</h5>
                      <form className="form-horizontal">
                        <div className="row form-group-lg form-group">
                          <label className="col-sm-4 col-md-3 control-label" id="site">
                            Website
                          </label>
                          <div className="col">
                            <input
                              type="text"
                              name="website"
                              value={website}
                              placeholder="Website"
                              className="input-lg form-control"
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                        <div className="row form-group-lg form-group">
                          <label className="col-sm-4 col-md-3 control-label">Password</label>
                          <div className="col">
                            <input
                              type="text"
                              name="password"
                              value={password}
                              placeholder="Password"
                              className="input-lg form-control"
                              onChange={this.onChange}
                            />
                          </div>
                        </div>

                        <div className="row justify-content-between">
                          <Link to="/account" className="col-3 mx-3 btn btn-primary">
                            <p style={{ marginBottom: '0px' }}>Login</p>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div> */}
          {/* <div className="col-md-3 my-sm-1">
              <div className="card border-0 mt-5">
                <div className="card-body p-0">
                  <h6>Want to be on out platform?</h6>
                  <h6>Contact us!</h6>
                  <Link to="/signup">
                    <button type="button">Signup</button>
                  </Link>
                </div>
              </div>
            </div> */}
          <label for="site">Website</label>
          <Input type="text" id="site" name="site" placeholder="website" onChange={this.onChange} />
          <label for="pw">Password</label>
          <Input type="text" id="pw" name="pw" placeholder="Password" onChange={this.onChange} />
          <div style={{ flex: 'row' }}>
            <Link to="/account">
              <button style={{ marginBottom: '20px' }}>Login</button>
            </Link>
            <Link to="/signup" style={{ float: 'right' }}>
              <button type="button">Signup</button>
            </Link>
          </div>
        </Container>
      </Fragment>
    );
  }
}
