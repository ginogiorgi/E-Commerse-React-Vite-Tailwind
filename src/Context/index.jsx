import { createContext } from "react";
import { useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider, ShoppingCartContext };
