import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { Link } from "react-router-dom";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  function handleDelete(id) {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  }
  function handleCheckout() {
    const orderToAdd = {
      date: new Date().toDateString(),
      products: context.cartProducts,
      totalProducts: context.itemQuantity,
      totalPrice: context.itemsPrice,
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setItemQuantity(0);
    context.setItemsPrice(0);
    context.setIsProductCartOpen(false);
  }

  return (
    <aside
      className={`${
        context.isProductCartOpen ? "" : "hidden"
      } w-[360px] h-[628px] m-2 top-[68px] flex-col absolute right-0 rounded-lg bg-black shadow-[0_0_15px_7px] shadow-myGray/40 z-20`}
    >
      <h2 className="font-medium text-xl p-6 text-center underline underline-offset-2">
        My Order
      </h2>
      <div className="h-[390px] overflow-y-auto">
        {context.cartProducts.map((item) => (
          <OrderCard props={item} handleDelete={handleDelete} key={item.id} />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center mb-1">
          <span className="font-light">Total Products: </span>
          <span className="font-medium text-2xl">{context.itemQuantity}</span>
        </p>
        <p className="flex justify-between items-center mt-1">
          <span className="font-light">Total Price: </span>
          <span className="font-medium text-2xl">
            $ {context.itemsPrice.toFixed(2)}
          </span>
        </p>
      </div>
      <Link to="/my-orders/last">
        <button
          className="bg-white py-3 text-black rounded-lg w-5/6 m-auto flex justify-center mt-5 font-medium text-2xl"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
}

export { CheckoutSideMenu };

{
  /* <p className="font-medium text-lg p-2 flex justify-between mb-4">
<span>Total Products: {context.itemQuantity}</span>
<span>Total Price: $ {context.itemsPrice.toFixed(2)}</span>
</p> */
}
