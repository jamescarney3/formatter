import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext({ number: null, actions: {} });

/*
wrapping the built-in context provider in another component allows us to pass
state around with its value. all that's required here is a state hook with one
value and its updater, but it's easy to imagine a case where this could
implement a reducer internally, import other reducer hooks and their actions,
or import a whole redux store and assortment of action creators and accessor
methods to compose into its context value
*/
export const StoreProvider = ({ children }) => {
  const [number, setNumber] = useState(null);

  return (
    <StoreContext.Provider value={{ number, actions: { setNumber } }}>
      {children}
    </StoreContext.Provider>
  );
};


// not defining a Consumer component here because there's no need yet; each
// component that subscribes to the store should be fine with this hook
export const useStore = () => {
  const value = useContext(StoreContext);
  return value;
};
