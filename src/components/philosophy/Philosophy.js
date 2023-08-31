import React from 'react'
import LimitJPG from '../../images/limit.jpg'
import LimitWEBP from '../../images/limit.webp'
import NutritionJPG from '../../images/nutrition.jpg'
import NutritionWEBP from '../../images/nutrition.webp'
import TrainingJPG from '../../images/entrenar.jpg'
import TrainingWEBP from '../../images/entrenar.webp'
import SuppsJPG from '../../images/supps.jpg'
import SuppsWEBP from '../../images/supps.webp'


const Philosophy = () => {
  return (
    <div className="block_filosofia">
      <section className="block container  "id="filosofia">
        <header className="block__header">
          <h2 className="block_header_headline"> Mi filosofía</h2>
          <p>
      
          </p>
        </header>
        <article className="grid grid--1x2 feature">
          <div className="feature__content" data-aos="fade-right" data-aos-duration="2000">
            <h3 className="feature__heading" data-aos="zoom-in-up" data-aos-duration="1000">Superar los límites</h3>
            <p className="feature__content">
              Este principio implica aumentar continuamente las exigencias del sistema musculoesquelético para ganar continuamente en tamaño, fuerza y resistencia muscular.
              Durante el entrenamiento, utilizamos por eso el principio de la progresión en el marco de los estímulos. Esto puede funcionar mediante el volumen, la intensidad, los tiempos de pausa y otros parámetros. En pocas palabras, para aumentar el tamaño y la fuerza, debes hacer que tus músculos trabajen continuamente más de lo que están acostumbrados.
            </p>
            {/* <a href="youtube.com" className="link-arrow">Saber más</a> */}
          </div>
          
          <picture className='feature__picture' data-aos="zoom-in-left" data-aos-duration="2000">
            <source srcSet={LimitWEBP} type="image/webp" />
            <source srcSet={LimitJPG} type="image/jpg" />
            <img  src={LimitJPG} alt="Alt text" />
          </picture>
  
          
        </article>
        <article className="grid grid--1x2 feature">
          <div className="feature__content" data-aos="fade-left" data-aos-duration="2000">
           
            <h3 className="feature__heading" data-aos="zoom-in-up" data-aos-duration="1000">Entender el proceso</h3>
            <p className= "feature__content">
              La nutrición es la esencia de una vida sana, de un cuerpo optimizado para el rendimiento y de un bienestar óptimo. Por lo tanto, es importante entender por sí mismo cómo funciona la nutrición en su cuerpo. En lugar de comer rígidamente según un plan que puede no tener sentido para ti, aprenderás los aspectos más importantes de la nutrición en mi coaching para poder vivir mejor por ti mismo y entender más tu cuerpo.
            </p>
            {/* <a href="youtube.com" className="link-arrow">Saber más</a> */}
          </div>
          <picture className='feature__picture' data-aos="zoom-in-left" data-aos-duration="2000">
            <source srcSet={NutritionWEBP} type="image/webp" />
            <source srcSet={NutritionJPG} type="image/jpg" />
            <img  src={NutritionJPG} alt="Alt text" />
          </picture>
            
        </article>
        <article className="grid grid--1x2 feature">
          <div className="feature__content" data-aos="fade-right" data-aos-duration="2000">
            <h3 className="feature__heading"  data-aos="zoom-in-up" data-aos-duration="1000">Disfruta de tu entrenamiento</h3>
            <p className= "feature__content">
              Es absolutamente esencial que disfrutes de tu entrenamiento y que éste se adapte a tus necesidades y a tu nivel de rendimiento. 
 Es por eso que para asegurar tu satisfacción, te brindamos un plan individualizado que se adapte a ti, a partir del análisis de diversos factores que influyen en tu rendimiento como son: tu condición de salud, hábitos alimenticios, tiempo de regeneración del cuerpo, tiempo disponible para realizar las actividades físicas que involucran el movimiento y uso de las articulaciones entre otras consideraciones, para que tengas la mejor experiencia de entrenamiento, garantizando a su vez el progreso y el logro de tus metas propuestas.
            </p>
            {/* <a href="youtube.com" className="link-arrow">Saber más</a> */}
          </div>
          <picture className='feature__picture' data-aos="zoom-in-left" data-aos-duration="2000">
            <source srcSet={TrainingWEBP} type="image/webp" />
            <source srcSet={TrainingJPG} type="image/jpg" />
            <img  src={TrainingJPG} alt="Alt text" />
          </picture>
        </article>
        <article className="grid grid--1x2 feature">
          <div className="feature__content" data-aos="fade-left" data-aos-duration="2000">
          
            <h3 className="feature__heading" data-aos="zoom-in-up" data-aos-duration="1000">Transparencia </h3>
            <p className= "feature__content">
            Nada de suplementos innecesarios, masajes u otros procedimientos que no cumplen lo que prometen. Todo lo que hacemos juntos tengo que poder explicárselo de forma que lo entienda. No hay promesas poco realistas para su transformación, sino que establecemos juntos objetivos realistas. La confianza es la base más importante para el éxito de la cooperación.
            </p>
            {/* <a href="youtube.com" className="link-arrow">Saber más</a> */}
          </div>
          <picture  className='feature__picture feature__picture-last' data-aos="zoom-in-left" data-aos-duration="2000">
           <source srcSet={SuppsWEBP} type="image/webp" />
           <source srcSet={SuppsJPG} type="image/jpg" />
           <img  src={SuppsJPG} alt="Alt text" />
          </picture>
        </article>
      </section>
    </div>
  )
}

export default Philosophy