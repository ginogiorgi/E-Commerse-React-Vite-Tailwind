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
    if (context.cartProducts.length > 0) {
      context.setIsProductCartOpen(false);
      const orderToAdd = {
        date: new Date().toLocaleDateString(),
        products: context.cartProducts,
        totalProducts: context.itemQuantity,
        totalPrice: context.itemsPrice,
      };

      context.setOrder([...context.order, orderToAdd]);
      context.setCartProducts([]);
      context.setItemQuantity(0);
      context.setItemsPrice(0);
    }
  }

  return (
    <aside
      className={`${
        context.isProductCartOpen ? "" : "hidden"
      } w-[360px] h-5/6 m-2 top-14 absolute right-0 rounded-lg bg-black shadow-[0_0_15px_7px] shadow-myGray/40 z-20`}
    >
      <h2 className="font-medium text-xl p-4 text-center underline underline-offset-2">
        My Order
      </h2>
      <div className="h-[57%] overflow-y-auto">
        {context.cartProducts.map((item) => (
          <OrderCard props={item} handleDelete={handleDelete} key={item.id} />
        ))}
      </div>
      <div>
        <p className="flex justify-between items-center m-3">
          <span className="font-light">Total Products: </span>
          <span className="font-medium text-2xl">{context.itemQuantity}</span>
        </p>
        <p className="flex justify-between items-center m-3">
          <span className="font-light">Total Price: </span>
          <span className="font-medium text-2xl">
            $ {context.itemsPrice.toFixed(2)}
          </span>
        </p>
      </div>
      <Link to={`${context.cartProducts.length > 0 ? "/my-orders/last" : ""}`}>
        <button
          className="bg-white py-3 text-black rounded-lg w-5/6 h-14 justify-center font-medium text-2xl hover:bg-green-500 hover:text-white absolute bottom-4 mx-[8.3%]"
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
