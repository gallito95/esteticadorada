import React, { createContext, useContext, useState } from 'react';

const SelectedPlansContext = createContext();

export const useSelectedPlans = () => {
  return useContext(SelectedPlansContext);
};

export const SelectedPlansProvider = ({ children }) => {
  const [selectedPlans, setSelectedPlans] = useState([]);

  const addSelectedPlan = (plan) => {
    setSelectedPlans((prevSelectedPlans) => [...prevSelectedPlans, plan]);
  };

  const removeSelectedPlan = (planName) => {
    setSelectedPlans((prevSelectedPlans) =>
      prevSelectedPlans.filter((plan) => plan.name !== planName)
    );
  };

  return (
    <SelectedPlansContext.Provider
      value={{ selectedPlans, addSelectedPlan, removeSelectedPlan }}
    >
      {children}
    </SelectedPlansContext.Provider>
  );
};