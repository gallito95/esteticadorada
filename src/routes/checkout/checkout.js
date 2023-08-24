import React, { useState } from 'react';
import './checkout.scss';
import { faEnvelope, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from '../../components/footer/Footer';

const Checkout = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const selectedPlans = JSON.parse(searchParams.get('selectedPlans') || '[]');

  const [plans, setPlans] = useState(selectedPlans);

  const handleRemovePlan = (index) => {
    const newPlans = [...plans];
    newPlans.splice(index, 1);
    localStorage.setItem('selectedPlans', JSON.stringify(newPlans));
    setPlans(newPlans);
  }

  const total = plans.reduce((sum, plan) => {
    const price = parseFloat(plan.price.match(/\d+(\.\d+)?/)[0]);
    return sum + price;
  }, 0);

  return (
    <div>
    <div className="checkout-container">
      <h2 className='checkout-heading'>Planes seleccionados:</h2>
      <ul className="checkout-list">
        {plans.map((plan, index) => (
          <li key={`${plan.name}-${plan.price}`} className="checkout-item">
            <div className="checkout-info">
              <div className="checkout-name">{plan.name}</div>
              <div className="checkout-price">{plan.price}</div>
            </div>
            <div onClick={() => handleRemovePlan(index)}> 
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          </li>
        ))}
      </ul>
      <div className="checkout-total">Total: RD${total.toFixed(2)}</div>
      <div className="checkout-information">
  <p> Copie el importe y los servicios seleccionados y envíe la información a:</p>
  <p>
    <FontAwesomeIcon icon={faEnvelope} /> stefan.sauer95@gmx.de
  </p>
  <p>
    <FontAwesomeIcon icon={faWhatsapp} /> +1809 624 9027
  </p>
</div>

     
     
    </div>
    <Footer/>
    </div>
  )
}

export default Checkout;
