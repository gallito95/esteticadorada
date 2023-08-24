import React, { useState } from 'react';
import './cartDropdown.scss';

const CartDropdown = ({ selectedPlans, handleRemovePlan }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleCartToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-dropdown-header" onClick={handleCartToggle}>
        <i className="fa fa-shopping-cart"></i>
        <span className="cart-dropdown-count">{selectedPlans.length}</span>
      </div>
      {isOpen && (
        <div className="cart-dropdown-content">
          {selectedPlans.map((plan, index) => (
            <div key={`${plan.name}-${plan.price}`} className="cart-dropdown-item">
              <div className="cart-dropdown-info">
                <div className="cart-dropdown-name">{plan.name}</div>
                <div className="cart-dropdown-price">{plan.price}</div>
              </div>
              <div className="cart-dropdown-quantity">
                <button onClick={() => handleRemovePlan(index, "decrement")}>-</button>
                <span className="cart-dropdown-quantity-number">{plan.quantity}</span>
                <button onClick={() => handleRemovePlan(index, "increment")}>+</button>
              </div>
              <div className="cart-dropdown-actions">
                <button onClick={() => handleRemovePlan(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartDropdown;
