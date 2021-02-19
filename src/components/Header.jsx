import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import user from '../assets/static/user-icon.png'

const Header = () => (
  
  <header className="header">
    <Link to='/'>
        <img className="header__img" src={logo} alt="Platzi Video" />
    </Link>
    <div className="header__menu">
        <div className="header__menu--profile">
          <img src={user} alt="user__foto" />
          <p>Perfil</p>
        </div>
        <ul>
          <li><Link to='/'>Iniciar Sesión</Link></li>
          <li><Link to='/'>Cerrar Sesión</Link></li>
        </ul>
    </div>
  </header>
  
);

export default Header;

