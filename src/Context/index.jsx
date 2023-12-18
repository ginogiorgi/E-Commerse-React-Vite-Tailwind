import { createContext } from "react";
import { useState, useEffect } from "react";
import { apiUrl } from "../api";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isProductCartOpen, setIsProductCartOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemsPrice, setItemsPrice] = useState(0);
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    };
    fetchData();
  }, []);
  const searchedItems = items?.filter((item) =>
    item.title?.toLowerCase().includes(searchByTitle?.toLowerCase())
  );

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
        setSearchByTitle,
        searchedItems,
        searchByTitle,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider, ShoppingCartContext };
