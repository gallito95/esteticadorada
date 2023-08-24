import React from 'react'
import Logo from '../../Icons/logo.svg'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';



const Header = () => {
  return (
    <header>
    <nav className="nav collapsible">
        <div className="nav__content">
          <a className="nav__content-brand" href="/"><img src={Logo}  alt="not working"/></a>
          <p className="nav__content-text"> Golden  <span className="nav__context-span">Aesthetics</span></p>
        </div>     
      <ul className="list nav__list collapsible__content">
      <li className="nav__item"><NavLink to="/calorie-calculator" >Calculadora de calorías</NavLink></li>
        <li className="nav__item"><a href="#servicios">Servicios</a></li>
        <li className="nav__item"><a href="#filosofia">Filosofía</a></li>
        <li className="nav__item"><a href="#referencias">Referencias</a></li>
        <li className="nav__item"><SocialIcon url="https://www.instagram.com/esteticadorada_rd/" /></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header

