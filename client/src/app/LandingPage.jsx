import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { post } from 'axios';
import bg from './images/bg.jpg';
import tree from './images/pawtree.png';
import goog from './images/goog.png';
import fb from './images/fb.png';
import mbn from './images/mubeen.png';

const sampleData = [
  {
    name: 'Peter',
    breed: 'golden corgie',
    age: '3 years old',
    description: 'Lets skip the small talk and go for a walk',
    picture: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
  },
  {
    name: 'Bones',
    breed: 'bulldog',
    age: '2 years old',
    description: 'Lets play fetch',
    picture: 'https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg',
  },
  {
    name: 'Rover',
    breed: 'golden corgie',
    age: '1 years old',
    description: 'Cute and fluffy',
    picture: 'https://weloveanimals.me/wp-content/uploads/2017/10/gettyimages-590486672-e1508512743796.jpg',
  },
  {
    name: 'Spot',
    breed: 'pug',
    age: '5 years old',
    description: 'Friendly and playful',
    picture: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
  },
  {
    name: 'Last Dog',
    breed: 'Last Dog',
    age: 'Last Dog',
    description: 'Last Dog',
    picture:
      'https://cdn.vox-cdn.com/thumbor/wng90rt7pFT3o_oPRNV21iK-2x8=/0x0:4560x3041/1200x800/filters:focal(1916x1157:2644x1885)/cdn.vox-cdn.com/uploads/chorus_image/image/58504395/911428568.jpg.0.jpg',
  },
];

const makeData = (e, i = 0) => {
  if (!sampleData[i]) return;
  post('/api/animal', sampleData[i])
    .then(() => makeData(e, i + 1))
    .catch(err => console.log(err));
};

const Button = styled.button`
  float: 'right';
  margin-right: 1em;
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  color: white;
  border: 2px solid white;
`;

const styles = {
  main: {
    background: `url(${bg}) no-repeat`,
    backgroundSize: '100% 850px',
    paddingBottom: '30px',
  },

  tree: {
    // position: 'absolute',
    top: '30%',
    right: '0',
    paddingTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  title: {
    // position: 'absolute',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '56px',
  },

  p: {
    // position: 'absolute',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '0',
  },
};

const LandingPage = () => (
  <div>
    <div style={styles.main}>
      {/* <nav className="navbar navbar-light mx-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', padding: '28px' }}>
        <a className="navbar-brand" style={{ color: '#fff', fontWeight: 'bold', fontSize: '32px' }} href="/">
          Paws.
        </a>
        <div style={{ float: 'left' }}>
          <a href="/auth/google">
            <img src={goog} style={{ marginRight: '30px', color: 'white', height: '40px' }} alt="google" />
          </a>
          <a href="/auth/facebook">
            <img src={fb} style={{ marginRight: '30px', color: 'white', height: '40px' }} alt="fb" />
          </a>
          <Button type="button" onClick={makeData}>
            Load Data
          </Button>
          <Link to="/portal">
            <Button type="button">Shelters</Button>
          </Link>
        </div>
      </nav> */}
      <nav style={{ backgroundColor: 'rgba(0, 0, 0, 0)', padding: '28px' }}>
        <a style={{ color: '#fff', fontWeight: 'bold', fontSize: '32px' }} href="/">
          Paws.
        </a>
        <div style={{ float: 'right' }}>
          <a href="/auth/google">
            <img src={goog} style={{ marginRight: '30px', color: 'white', height: '40px' }} alt="google" />
          </a>
          <a href="/auth/facebook">
            <img src={fb} style={{ marginRight: '30px', color: 'white', height: '40px' }} alt="fb" />
          </a>
        </div>
      </nav>
      <div className="container" style={{ maxWidth: '80%' }}>
        <div className="row align-items-center">
          <div className="col-lg-6 pb-5  mb-5 col-md-12">
            <h1 style={styles.title}>Share your pets</h1>
            <h1 style={styles.title}>Help others find a home.</h1>
            <p style={styles.p} className="mt-2">
              Paws is a community for pet lovers to share and view pictures of pets while serving as a platform to aid
              the adoption of animals in need. As you browse through thousands of pictures of pets, Paws will
              occasionally suggest pets near you available for adoption based on your preferences.
            </p>
            {/* <button className="btn btn-outline-light mt-4 mb-5" type="button">
            Sign up
          </button> */}
          </div>
          <div className="col-lg-6 hidden-md-down  align-items-center">
            <img src={tree} style={styles.tree} alt="loading" />
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <h1 className="col display-3 text-center mt-5">Meet the team!</h1>
        </div>
        <div className="row align-items-center my-5">
          <div className="col-md-3 col-sm-12 text-center">
            <div className="card" style={{ border: '0px' }}>
              <div className="card-body">
                <img className="mb-4" src={mbn} style={{ height: '125px', width: '125px' }} alt="profile" />
                <h5>Eric Dai</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 text-center">
            <div className="card" style={{ border: '0px' }}>
              <div className="card-body">
                <img className="mb-4" src={mbn} style={{ height: '125px', width: '125px' }} alt="profile" />
                <h5>Max Berkowitz</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 text-center">
            <div className="card" style={{ border: '0px' }}>
              <div className="card-body">
                <img className="mb-4" src={mbn} style={{ height: '125px', width: '125px' }} alt="profile" />
                <h5>Derrek Tran</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 text-center">
            <div className="card" style={{ border: '0px' }}>
              <div className="card-body">
                <img className="mb-4" src={mbn} style={{ height: '125x', width: '125px' }} alt="profile" />
                <h5>Mubeen Ali</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
