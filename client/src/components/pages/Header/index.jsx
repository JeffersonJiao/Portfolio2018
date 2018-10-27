import React, { Component } from 'react'
import { Nav } from '../Navigation';
import './header.css'
import Particles from 'react-particles-js';

const particleStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%'
}

export class Header extends Component {
  state = {
    particles:{
      number:{
        value: 30,
        density:{
          enable:true,
          value_area:800
        }
      },
      move:{
        enable:true,
        speed: 3,
      }
    }
  }
  
  playParticle = () =>{
    var newSpeed = this.state.particles.move.speed;
    (newSpeed !== 0) ? newSpeed = 0 : newSpeed = 3;

    const particles = {
      number:{
        value: 30,
        density:{
          enable:true,
          value_area:800
        }
      },
      move:{
        enable: true,
        speed: newSpeed
      }
    }
    this.setState({particles})
  }
  render() {
    return (
      <React.Fragment>
          <div className="header-wrapper" onClick={this.playParticle}>
            <div className="container">
              <Nav scrollPos={this.props.scrollPos}/>
            </div>
            <Particles
              params={this.state}
              style={particleStyle}
            />
            <div className="container-inside">
                <h1>JEFFERSON<br/>JIAO</h1>
                <h4>FULL STACK DEVELOPER</h4>
            </div>
            <div className="profile-picture">
            </div>
            <div className="profile-picture-half">

            </div>
          </div>
      </React.Fragment>
    )
  }
}



export default Header
