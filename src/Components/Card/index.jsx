import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";

function Card(data) {
  const context = useContext(ShoppingCartContext);
  const cart = document.getElementById("cart");

  function getNewCartProduct(productData) {
    const foundProduct = context.cartProducts.find(
      (product) => product.id === productData.id
    );

    if (!foundProduct) {
      context.setCartProducts([
        ...context.cartProducts,
        { ...productData, quantity: 1 },
      ]);
    } else {
      foundProduct.quantity++;
    }
  }

  return (
    <div
      className="cursor-pointer w-56 h-60 rounded-lg shadow-lg shadow-myGray/40 hover:border"
      onClick={() => {
        context.setIsProductDetailOpen(true);
        context.setProductToShow(data.data);
      }}
    >
      <figure className="relative w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-myGray/40 rounded-lg font-semibold text-black m-2 px-2">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-contain rounded-t-lg bg-white"
          src={data.data.image}
          alt="img"
        />
        <button
          className="absolute top-2 right-2 bg-myGray rounded-full hover:animate-spin-mine"
          onClick={(event) => {
            event.stopPropagation();
            cart.className = `cursor-pointer flex gap-3 items-center ${
              context.isProductCartOpen ? "" : "animate-pingSlow"
            }`;
            getNewCartProduct(data.data);
            context.setItemQuantity(++context.itemQuantity);
            context.setItemsPrice(context.itemsPrice + data.data.price);
          }}
        >
          <PlusIcon className="h-6 w-6 text-black stroke-black" />
        </button>
      </figure>
      <p className="flex justify-between w-full h-1/5 items-center p-3 pb-4">
        <span className="text-sm font-light truncate">{data.data.title}</span>
        <span className="text-sm font-medium">${data.data.price}</span>
      </p>
    </div>
  );
}

export { Card };
