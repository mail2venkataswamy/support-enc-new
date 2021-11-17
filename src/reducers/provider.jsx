import React, { createContext } from "react";

export const proceEditingContext = createContext({});

const PriceEditingProvider = (props) => {
  const [priceEditingState, setPriceEditingState] = useState({});

  return (
    <PriceEditingProvider.Provider
      value={[priceEditingState, setPriceEditingState]}
    >
      {props.children}
    </PriceEditingProvider.Provider>
  );
};

export default PriceEditingProvider;
