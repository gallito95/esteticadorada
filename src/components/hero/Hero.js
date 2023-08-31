import React from 'react'

const Hero = () => {
  return (
    <section className="block block--dark block--skewed-left hero">
      <div className="container grid grid--1x2">
        <header className="block__header hero__content">
          <h1 data-aos="fade-right" data-aos-duration="2000" className="block__heading"> Tu Entrenador Personal en Linea</h1>
           
           
          <h1 className=" hero__tagline animate-character" data-aos="fade-left" data-aos-duration="2500">
            "Entrenamiento y nutrición basados en la ciencia para su éxito"
          </h1>
          {/* <button className="btn btn--accent btn--stretched btn--hero" > <a href="#servicios" className="btn__a" >Comienza!</a></button> */}
        </header>   
      </div>
    </section>
  )
}

export default Hero