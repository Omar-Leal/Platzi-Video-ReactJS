import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'

const Login = () => {

  const [form, setForm ] = useState({
    email: '',

  });
/********** */
  const handleInput = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }
/** */
  const handleSubmit = event => {
    event.preventDefault();
    console.log(form)
  }


  return (
    <section className="login">
    <section className="login__container">
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleSubmit} className="login__container--form">

          <input 
          name="email"
          className="input" 
          type="text" 
          placeholder="Correo" 
          onChange={handleInput}
          />

          <input 
          name="password"
          className="input" 
          type="password" 
          placeholder="Contraseña"
          onChange={handleInput}
          />

          <button className="buttom">Iniciar Sesión</button>
        <div className="login__container--remember">
            <label >
              <input type="checkbox" id="box1" value="checked" />Recuerdame
            </label>
          <Link to="/">I forgot my password</Link>  
        </div>
      </form>

      <section className="login__container--socialMedia">
          <div><i className="fab fa-google"></i>Log in with Google</div>
          <div><i className="fab fa-twitter"></i>Log in with Twitter</div> 
      </section>
          <p className="login__container--register">
            Don't have an account? <Link to="/">Sign out!</Link>
          </p>
    </section>
    </section>
  )
 

}

export default Login;