import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext({ number: null, actions: {} });

export const StoreProvider = ({ children }) => {
  const [number, setNumber] = useState(null);

  return (
    <StoreContext.Provider value={{ number, actions: { setNumber } }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const value = useContext(StoreContext);
  return value;
};
