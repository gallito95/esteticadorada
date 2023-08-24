import React from 'react'

const Plans = () => {
  function handleCheckout(planName, planPrice, planDescription){
    const selectedPlans = JSON.parse(localStorage.getItem('selectedPlans') || '[]');
    selectedPlans.push({name: planName, price:planPrice , description: planDescription});
    localStorage.setItem('selectedPlans', JSON.stringify(selectedPlans))
    const queryString = new URLSearchParams({
      selectedPlans: JSON.stringify(selectedPlans),
    }).toString();
    window.location.href =`/checkout?${queryString}`
  }
  
  

  return (
    <div className="section-plans">
    <section data-aos="fade-up" data-aos-duration="1000" className="block container  " id="servicios">
      <h1 className="plans_header" > Servicios</h1>
      <div className="grid grid--1x3">
        <div className="plan ">
          <div className="card card--secondary container-service">
            <header className="card__header">
              <h3 className="plan__name">Asesoramiento nutricional</h3>
              <span className="plan__price">RD$ 1500</span>
              <span className="badge badge--secondary badge--small">10% OFF</span>
              <span className="plan__description">Finalmente a la figura del sueño!</span>
            </header>
            <div className="card__body">
              <ul className="list list--tick">
                <li className="list__item">Plan de nutrición adaptado a sus preferencias </li>
                <li className="list__item">Llamada de 60 minutos por Skype para el asesoramiento</li>
                <li className="list__item">Material adicional sobre el tema de la nutrición para el autoaprendizaje</li>
              </ul>
              <button
               className="btn btn--outline btn--block"
               onClick={() => handleCheckout('Asesoramiento nutricional', 'RD$ 1500', 'Finalmente a la figura del sueño!')}
              >Comprar ahora
              </button>
            </div>
          </div>
        </div>
        <div className="plan plan--popular">
          <div className="card card--primary container-service">
            <header className="card__header">
              <h3 className="plan__name"> Coaching con todo incluido</h3>
              <span className="plan__price">RD$ 3000</span>
              <span className="plan__billing-cycle">/mes</span>
              <span className="badge badge--primary badge--small">10% OFF</span>
              <span className="plan__description"> El paquete completo!</span>
            </header>
            <div className="card__body">
              <ul className="list list--tick">
                <li className="list__item">Plan de Entrenamiento y de nutrición individual </li>
                <li className="list__item">Llamada telefónica semanal por Skype para el Análisis del progreso</li>
                <li className="list__item">Acceso al grupo de Whatsapp para responder rapidamente tus pregtunas</li>
              </ul>
              <button
               className="btn btn--outline btn--block"
               onClick={() => handleCheckout('Coaching con todo incluido', 'RD$ 5000/mes', 'El paquete completo!')}
              >
              Comprar ahora
              </button>
            </div>
          </div>
        </div>
        <div className="plan">
          <div className="card card--secondary container-service">
            <header className="card__header">
              <h3 className="plan__name">Rutina de Entrenamiento</h3>
              <span className="plan__price">RD$ 1500</span>
              <span className="badge badge--secondary badge--small">10% OFF</span>
              <span className="plan__description">Siente tus músculos como nunca antes! </span>
            </header>
            <div className="card__body">
              <ul className="list list--tick">
                <li className="list__item">Plan de Entrenamiento Individual</li>
                <li className="list__item">Llamada de 60 Minutos por Skype para el asesoramiento</li>
                <li className="list__item">Material adicional sobre el tema del entrenamiento para el autoaprendizaje</li>
              </ul>
              <button
               className="btn btn--outline btn--block"
               onClick={() => handleCheckout('Rutina de Entrenamiento', 'RD$ 1500', 'Siente tus músculos como nunca antes!')}
               >
               Comprar ahora
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  )
}

export default Plans