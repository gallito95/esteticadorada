import React from 'react'
import BodyFront from '../../images/frontNew.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Certification = () => {

useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <section className="block--dark2  ">
      <div className=" grid grid__Certification">
        
        <picture data-aos="fade-right" className="block-showcase__image front__Picture">
          <img src={BodyFront} alt="" />
        </picture>
        <ul className="list list-showcase" >
          <li>
            <h2 className="block__headline--calificaciones" id="calificaciones">Calificaciones</h2>
            <div className="media">
              <div className="media__image">
                <svg className="icon icon--primary">
                  <use href="images/sprite.svg#snap"></use>
                </svg>
              </div>
              <div className="media__body">
                <h3 className="media__title">Nutricionista y Entrenador de fitnesscertificado según ZFU y TÜV SÜD</h3>
               
              </div>
            </div>
          </li>
          <li>
            <div className="media">
              <div className="media__image">
                <svg className="icon icon--primary">
                  <use href="images/sprite.svg#wordpress"></use>
                </svg>
              </div>
              <div className="media__body">
                <h3 className="media__title">4 años de experiencia como entrenador en deportes amateurs y profesionales</h3>
                
              </div>
            </div>
          </li>
          <li>
            <div className="media">
              <div className="media__image">
                <svg className="icon icon--primary">
                  <use href="images/sprite.svg#wordpress"></use>
                </svg>
              </div>
              <div className="media__body">
                <h3 className="media__title">Más de 10 años de experiencia propia en fitness, resistencia y powerlifting</h3>
                
              </div>
            </div>
          </li>
        </ul>
        {/* <picture data-aos="fade-right" className="block-showcase__image2">
          <img src={BodyBack} alt="" />
        </picture> */}
        
      </div>
    </section>
  )
}

export default Certification