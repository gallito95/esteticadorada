import React from 'react'
import { Outlet } from 'react-router'
import Hero from '../../components/hero/Hero'
import Panels from '../../components/panels/Panels';
import Plans from '../../components/plans/Plans';
import Philosophy from '../../components/philosophy/Philosophy';
import References from '../../components/references/References';
import Certification from '../../components/certification/Certification';
import Footer from '../../components/footer/Footer';


const home = () => 

{
  return (
    <div className="App">
    <Hero/>
    <Panels/>
    <Plans/>
    <Philosophy/>
    <References/>
    <Certification/>
    <Footer/>
    <Outlet/>
  </div>
    
  )
}

export default home