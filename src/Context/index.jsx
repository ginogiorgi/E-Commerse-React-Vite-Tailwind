import { createContext } from "react";
import { useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isProductCartOpen, setIsProductCartOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemsPrice, setItemsPrice] = useState(0);
  const [order, setOrder] = useState([]);

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
        itemQuantity,
        setItemQuantity,
        itemsPrice,
        setItemsPrice,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider, ShoppingCartContext };
