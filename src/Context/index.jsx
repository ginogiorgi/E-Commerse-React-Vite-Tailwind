import { createContext } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  return (
    <ShoppingCartContext.Provider>{children}</ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider };
