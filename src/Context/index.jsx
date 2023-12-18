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
  const [searchByCategory, setSearchByCategory] = useState("");

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

  let filteredCategory;

  if (searchByCategory) {
    filteredCategory = items?.filter(
      (item) => item.category === searchByCategory
    );
  } else {
    filteredCategory = items;
  }

  const filteredItems = filteredCategory?.filter((item) =>
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
        filteredItems,
        searchByTitle,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider, ShoppingCartContext };
