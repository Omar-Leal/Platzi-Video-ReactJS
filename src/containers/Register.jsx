import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Register.scss'

const Register = () => 
<section class="register">
<section class="register__container">
  <h2>Registrate aquí</h2>
  <form action="" class="register__container--form">
    <input class="input" type="text" placeholder="Name" />
    <input class="input" type="email" placeholder="Your email" />
    <input class="input" type="password" placeholder="Type a password" />
    <button class="buttom">Registrarme</button>
    <div class="register__container--remember">
     

    </div>
  </form>
  <section class="register__container--socialMedia">
   
  </section>
    <p class="register__container--register">        
      <a href="#">Iniciar Sesión</a>
    </p>
</section>
</section>

export default Register;