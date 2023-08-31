import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import Women1 from '../../images/women1.jpg'
import Women2 from '../../images/women2.jpg'
import Men1 from '../../images/men3.jpg'
import Men2 from '../../images/men4.jpg'
import "./references.styles.scss"

const References = () => {

  const carList = [
    {
      id: 1,
      name: "Mercedes Suero",
      img:
        Women1,
      info: "Durante años intenté perder peso con diferentes métodos, pero no funcionó. Después de 6 meses de trabajar con Stefan, por fin estoy cerca a mi meta. No tuve que matarme de hambre como en algunas de las dietas anteriores. Muchas gracias.",
    },
    {
      id: 2,
      name: "Maria Martinez",
      img:
        Women2,
      info: "Súper profesional y confiable. He aprendido mucho desde que empezamos a trabajar juntos. Stefan tiene en cuenta tus necesidades individuales y ha sido capaz de responder a todas mis preguntas con detalle. ¡Muy recomendable!",
    },
    {
      id: 3,
      name: "Pedro Medina",
      img:
        Men1,
     info: "Por fin tengo mi figura de playa. Stefan me enseñó que hacer ejercicio puede ser muy divertido y que comer sano no es monótono ni tiene mal sabor. Ahora espero con ansias mi próxima sesión de entrenamiento. ¡Muchas gracias amigo!"
    },
    { 
      id: 4,
      name: "Jose Rodruigez",
      img:
        Men2,
     info: "Antes me dolía siempre la columna cuando caminé mucho. Gracias al entrenamiento de rehabilitación con Stefan, ahora puedo moverme sin dolor y disfrutar de la vida cotidiana mucho más que antes. Muchas gracias por eso Stefan."
    },
  ];



    // List of all cars satisfing all the filters
  const [filteredList, setFilteredList] = useState(carList);
  const [currentItem,setCurrentItem] = useState(1)



  // set starting item





function nextPerson(){
  if(currentItem < 4){
    setCurrentItem(currentItem => currentItem +1)
  }
  else{
    setCurrentItem(1)
  }
}

function previousPerson(){
  if(currentItem > 1){
    setCurrentItem(currentItem => currentItem-1)
  }
  else{
    setCurrentItem(4)
  }
  
}



    return (
      <section className="block    block-showcase">
      <header className="block__header" >
        <h2 className="block__headline "id="referencias">Referencias</h2>
      </header>
      <div className="container">
        <div className="card testimonial">
       
        {filteredList.filter(item => item.id === currentItem).map((item, index) => (
           <div className="grid grid--1x2" key={index}>
            <div className="testimonial__image">
            <img  src={item.img} alt="car-img" />
             <span className="icon-container icon-container--accent">
                <svg className=" icon--small">
                <FontAwesomeIcon icon={faQuoteLeft} />
                </svg>
              </span>
            </div>
            <blockquote className="quote">
            <p className="quote__text">{item.info}</p>
            <footer>
                <div className="media media__reference">
                  <div className="media__image">
                    <svg className="icon icon--primary quote__line">
                      <FontAwesomeIcon icon={faMinus}/>
                    </svg>
                  </div>
                  <div className="media__body">
                  <h3 className="media__title quote__author">{item.name}</h3>
                  </div>
                  </div>
                 <div className="button-container">
                  <button className="prev-btn" >
                  <FontAwesomeIcon icon={faChevronLeft} onClick={previousPerson} />
                  </button>
                  <button className="next-btn" >
                    <FontAwesomeIcon icon={faChevronRight} onClick={nextPerson}/>
                </button>
                </div>
              </footer>
            </blockquote>
          </div>
             
        ))}                    
      
        </div>
      </div>
    </section>
    );
  
  
  
}

export default References