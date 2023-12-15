import { createContext } from "react";
import { useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isProductCartOpen, setIsProductCartOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        setIsProductDetailOpen,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isProductCartOpen,
        setIsProductCartOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider, ShoppingCartContext };
