import React, { Component } from 'react';
import styled from 'styled-components';
import { patch } from 'axios';
import { Motion, spring } from 'react-motion';
import Profile from './Profile';

/* eslint react/prop-types:0 */
const CardStyle = styled.div`
  position: absolute;
  z-index: 2;
  margin-left: 12%;
  margin-right: 12%;
  top: 12%;
  width: 75%;
  height: 70%;
  border-radius: 15px;
  overflow: hidden;
`;
const ImgDiv = styled.div`
  position: relative;
  height: ${window.outerHeight * 0.5}px;
  border-radius: 15px;
  background: black;
`;
const Img = styled.img`
  max-width: auto;
  max-height: 100%;
  border-radius: 15px;
`;

const clamp = (n, min, max) => Math.max(Math.min(n, max), min);

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderCard: true,
      x: 0,
      y: 0,
      xDelta: 0,
      yDelta: 0,
      xInitial: 0,
      yInitial: 0,
      xPrev: 0,
      yPrev: 0,
      down: false,
      springConfig: { stiffness: 1600, damping: 80 },
    };
    const { onUp, onDown, onMove } = this.props;
    this.onUp = onUp;
    this.onDown = onDown;
    this.onMove = onMove;

    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);

    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMoveRaf = this.handleMouseMoveRaf.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.onGotCapture = this.onGotCapture.bind(this);
    this.onLostCapture = this.onLostCapture.bind(this);

    this.onRelease = this.onRelease.bind(this);
  }

  componentDidMount() {
    // snaps back to place:
    window.addEventListener('touchend', this.onRelease);
    window.addEventListener('mouseup', this.onRelease);
  }

  componentWillReceiveProps() {
    this.setState({
      xDelta: 0,
      yDelta: 0,
      renderCard: true,
    });
  }

  onRelease() {
    const {
      profile: { id },
      nextPet,
      togglePopup,
    } = this.props;
    const { xDelta } = this.state;

    if (Math.abs(xDelta) < 150) {
      this.setState({
        xDelta: 0,
        yDelta: 0,
      });
    } else {
      if (xDelta > 150) {
        patch('/api/animal/addlike', { id });
      }
      this.setState({ renderCard: false });
      togglePopup(true);
      nextPet();
      // set this card back to 0,0 in componentWillReceiveProps
    }
  }

  onGotCapture() {
    this.setState({ hasCapture: true });
  }

  onLostCapture() {
    this.setState({ hasCapture: false });
  }

  onDown(event) {
    this.isDragging = true;
    event.target.setPointerCapture(event.pointerId);

    // We store the initial coordinates to be able to calculate the changes
    // later on.
    this.extractPositionDelta(event);
  }

  onMove(event) {
    if (!this.isDragging) return;
    const { left, top } = this.extractPositionDelta(event);

    this.setState(({ circleLeft, circleTop }) => ({
      circleLeft: circleLeft + left,
      circleTop: circleTop + top,
    }));
  }

  onUp() {
    this.isDragging = false;
  }

  getStyle() {
    const { springConfig, xDelta, down } = this.state;
    const change = Math.abs(xDelta) < 150 ? spring(0) : 0;
    return {
      x: down ? xDelta : change,
      rotate: down ? spring(clamp(xDelta / 15, -45, 45), springConfig) : 0,
    };
  }

  handleMouseDown({ pageX, pageY }) {
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMoveRaf);
    window.addEventListener('mouseup', this.handleMouseUp);
    const newProps = {
      ...this.state,
      x: pageX,
      y: pageY,
      xDelta: 0,
      yDelta: 0,
      xInitial: pageX,
      yInitial: pageY,
      xPrev: pageX,
      yPrev: pageY,
      down: true,
    };
    this.setState(this.onDown ? this.onDown(newProps) : newProps);
  }

  handleMouseMoveRaf({ pageX, pageY }) {
    if (!this.busy) {
      requestAnimationFrame(() => this.handleMouseMove({ pageX, pageY }));
      this.busy = true;
    }
  }

  handleMouseMove({ pageX, pageY }) {
    const { xInitial, yInitial, x, y } = this.state;
    const newProps = {
      ...this.state,
      x: pageX,
      y: pageY,
      xDelta: pageX - xInitial,
      yDelta: pageY - yInitial,
      xPrev: x,
      yPrev: y,
      xVelocity: pageX - x,
      yVelocity: pageY - y,
    };
    this.setState(this.onMove ? this.onMove(newProps) : newProps, () => {
      this.busy = false;
      return this.busy;
    });
  }

  handleTouchMove(e) {
    this.handleMouseMove(e.touches[0]);
  }

  handleTouchStart(e) {
    this.handleMouseDown(e.touches[0]);
  }

  extractPositionDelta(e) {
    const left = e.pageX;
    const top = e.pageY;
    const delta = {
      left: left - this.previousLeft,
      top: top - this.previousTop,
    };
    this.previousLeft = left;
    this.previousTop = top;
    return delta;
  }

  handleMouseUp() {
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('touchend', this.handleMouseUp);
    window.removeEventListener('mousemove', this.handleMouseMoveRaf);
    window.removeEventListener('mouseup', this.handleMouseUp);
    const newProps = { ...this.state, down: false };
    this.setState(this.onUp ? this.onUp() : newProps);
  }

  render() {
    const { profile } = this.props;

    return (
      <Motion style={this.getStyle()}>
        {({ x, rotate, opacity }) => (
          <CardStyle
            onMouseDown={this.handleMouseDown}
            onTouchStart={this.handleTouchStart}
            onPointerDown={this.onDown}
            onPointerMove={this.onMove}
            onPointerUp={this.onUp}
            onPointerCancel={this.onUp}
            onGotPointerCapture={this.onGotCapture}
            onLostPointerCapture={this.onLostCapture}
            style={{
              opacity,
              transform: `translate3d(${x}px, 0, 0) rotate(${rotate}deg)`,
            }}
          >
            <ImgDiv>
              <Img alt="dog" src={profile.picture} draggable={false} />
            </ImgDiv>
            <Profile profile={profile} />
          </CardStyle>
        )}
      </Motion>
    );
  }
}
