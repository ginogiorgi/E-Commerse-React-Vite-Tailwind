import { createContext } from "react";
import { useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        setIsProductDetailOpen,
        isProductDetailOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider, ShoppingCartContext };
