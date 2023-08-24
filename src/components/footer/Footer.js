import React from 'react'
import Logo from '../../Icons/logo.png'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className=" block--dark footer">
    <div className="container grid footer__sections">
      <section className="collapsible footer__section" id="footer">
        <div className="collapsible__header">
          <h2 className="collapsible__heading footer__heading"><a href="#servicios">Servicios</a></h2>
          <svg className="icon icon--white collapsible__chevron">
            <use href="images/sprite.svg#chevron"></use>
          </svg>
        </div>
        <div className="collapsible__content">
        </div>
      </section>
      <section className="collapsible footer__section">
        <div className="collapsible__header">
          <h2 className="collapsible__heading footer__heading">Contacto :</h2>
          <div>
          <p> <FontAwesomeIcon icon={faEnvelope} /> stefan.sauer95@gmx.de </p>
          <p>  <FontAwesomeIcon icon={faWhatsapp} /> +1809 624 9027</p>
        </div>
        </div>
      </section>
      <div className="footer__brand">
        <img className="footer__content-brand" src={Logo} alt="" />
        <p className="footer__copyright">Copyright 2021 </p>
        <p className="footer__copyright">Stefan Sauer</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer