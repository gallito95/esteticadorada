import { Outlet } from 'react-router'
import React from 'react'
import Logo from '../../Icons/logo.png'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import './navbar.styles.scss'


const Navbar = () => {
  return (
    <header>
    <nav className="nav collapsible">
        <div className="nav__content">
          <a className="nav__content-brand" href="/"><img src={Logo}  alt="not working"/></a>
          <p className="nav__content-text"> Estética  <span className="nav__context-span">Dorada</span></p>
        </div>     
      <ul className="list nav__list collapsible__content">
        <li className="nav__item"><NavLink to="/calorie-calculator" >Calculadora de calorías</NavLink></li>
        <li className="nav__item"><a href="/#servicios">Servicios</a></li>
        <li className="nav__item"><a href="/#filosofia">Filosofía</a></li>
        <li className="nav__item"><SocialIcon target="_blank" url="https://www.instagram.com/esteticadorada_rd/" /></li>
       
      </ul>
    </nav>
    <Outlet />
  </header>
  )
}

export default Navbar