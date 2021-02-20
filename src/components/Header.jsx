import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import user from '../assets/static/user-icon.png'

const Header = () => (
  
  <header className="header">
  <figure className="header_logo">
    <img src={logo} alt="PLatzi Video Logo" />
  </figure>

  <div className="header_menu">
    <div className="header_menu--profile">
      <i className="fas fa-user-circle"></i>
      <p>Profile</p>
    </div>
    <ul>
      <li><a href="#">Account</a></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </div>
 
</header>
  
);

export default Header;

