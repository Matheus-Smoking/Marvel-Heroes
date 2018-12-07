import React, { Component } from 'react';
import './styles/css/style.css';
import img from './videoplayback.gif';

class App extends Component {
  render() {
    return (
      <nav className="nav-hero" >
        <ul className="nav-hero__menu-hero">
          <li className="nav-hero__menu-hero-item" >Home</li>
          <li className="nav-hero__menu-hero__item" >Heroes</li>
          <li className="nav-hero__menu-hero__item" >History</li>
        </ul>
        <img className="img-hero" src={img}/>
      </nav>
    );
  }
}

export default App;
