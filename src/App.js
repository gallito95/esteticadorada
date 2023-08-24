import Home from "./routes/home/home"
import {Routes,Route} from "react-router-dom"
import Navigation from "./routes/navigation/Navbar"
import Calculator from "./routes/calculator/calorieCalculator"
import Checkout from "./routes/checkout/checkout"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {


  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <Routes>
    <Route path="/" element={<Navigation/>}>   
    <Route index element={<Home/> }/>
    <Route path="calorie-calculator" element={<Calculator/>}/>
    <Route path="checkout" element={<Checkout/>}/>
        </Route>
 
    
  </Routes>
  );
}

export default App;
