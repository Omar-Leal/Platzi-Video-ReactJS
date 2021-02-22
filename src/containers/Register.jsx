import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/styles/components/Register.scss'
import { registerRequest } from  '../accions'
import Header from '../components/Header'


const Register = (props) => {

  const [form, setValues ] = useState({
      email: '',
      name: '',
      password: '',
  });

  const handleInput = event  => {
      setValues({
        ...form,
        [event.target.name]: event.target.value
      })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form)
    props.history.push('/')
  } 
 
  return (
    <React.Fragment>
      <Header isRegister />
      <section className="register">
      <section className="register__container">
      <h2>Registrate aquí</h2>
      <form onSubmit={handleSubmit} className="register__container--form">
        <input 
          autoComplete="name"
          name="name"
          onClick={handleInput}
          className="input" 
          type="text" 
          placeholder="Name" />

        <input 
          autoComplete="email"
          name="email"
          onClick={handleInput}
          className="input" 
          type="email" 
          placeholder="Your email" />

        <input
          autoComplete="current-password"
          name="password"
          onClick={handleInput}
          className="input" 
          type="password" 
          placeholder="Type a password" />

        <button className="buttom">
          Registrarme
        </button>

        <div className="register__container--remember">        

        </div>
      </form>
      <section className="register__container--socialMedia">
      
      </section>
              <p className="register__container--register">        
                <Link to="/">Iniciar Sesión</Link>
              </p>
    </section>
   </section>

    </React.Fragment>
  )
}

const mapDispatchToProps = ({
    registerRequest,
})


export default connect(null, mapDispatchToProps)(Register);