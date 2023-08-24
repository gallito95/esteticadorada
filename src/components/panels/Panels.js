import React from 'react'
import { useRef, useEffect } from 'react';

const Panels = () => {
  
  const ref1 = useRef(null);
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  useEffect(() => {
    // 👇️ use a ref (best)
    const panel1 = ref1.current;
    panel1.addEventListener('click', toggleOpen);
    panel1.addEventListener('transitionend', toggleActive)
  },[])

  useEffect(() => {
    // 👇️ use a ref (best)
    const panel2 = ref2.current;
    panel2.addEventListener('click', toggleOpen);
    panel2.addEventListener('transitionend', toggleActive)
  },[])

  useEffect(() => {
    // 👇️ use a ref (best)
    const panel3 = ref3.current;
    panel3.addEventListener('click', toggleOpen)
    panel3.addEventListener('transitionend', toggleActive)
    
  },[])


  function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

    function toggleOpen() {
      console.log('Hello');
      this.classList.toggle('open');
    }

  return (
    <div className="panels">
      <div ref={ref1} className="panel panel1">
        <p className="panel__item">#Eficiencia</p>
        <p>Atletismo</p>
        <p className="panel__item">#Resistencia</p>
      </div>
      <div ref={ref2} className="panel panel2">
        <p className="panel__item">#Estética</p>
        <p>Culturismo</p>
        <p className="panel__item">#Arte</p>
      </div>
      <div ref={ref3} className="panel panel3">
        <p className="panel__item">#Fuerza</p>

        <p>Powerlifting</p>
        <p className="panel__item">#Intensidad</p>
      </div>
   </div>
  
  )
}

export default Panels