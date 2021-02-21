import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import { logoutRequest } from '../accions'


const Header = (props) => {  

  const { User } = props;

  const hasUser = Object.keys(User).length > 0;

  const handleLogout = event => {
    event.preventDefault;
    //props.history.push('/login')
    props.logoutRequest({})

  }


  return (
    <header className="header">
          <figure className="header_logo">
            <Link to="/"><img src={logo} alt="PLatzi Video Logo" /></Link>
          </figure>
          <div className="header_menu">
              <div className="header_menu--profile">
                <i className="fas fa-user-circle"></i>
                {hasUser ? <img src={gravatar(User.email)} alt={User.email} />
                  : <img alt={User.email} />             
                } 
                <p>Profile</p>
              </div>
              <ul>
                {hasUser ? <li><a href="#">{User.name}</a></li>
                  : null
                }
                
                {hasUser ? 
                <li>
                  <a href="#logout" onClick={handleLogout}>Logout</a>
                </li>                  
                :
                <li>
                    <Link to="/login">Logout</Link>
                </li>

                }

              </ul>
          </div>      
    </header>

  )
  
  
}

const mapStateToProps = (state) => {
  return {
    User: state.User
  }
}; 

const mapDispatchToProps = () => {
  logoutRequest
}

export default connect(mapStateToProps, null)(Header);

