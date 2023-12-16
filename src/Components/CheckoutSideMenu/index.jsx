import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductCartOpen ? "" : "hidden"
      } w-[360px] h-[552px] m-2 top-[68px] flex-col absolute right-0 rounded-lg bg-black shadow-[0_0_15px_7px] shadow-myGray/40 z-20`}
    >
      <h2 className="font-medium text-xl p-6 text-center">My Order</h2>
      <div className="h-[408px] overflow-y-auto">
        {context.cartProducts.map((item) => (
          <OrderCard props={item} key={item.id} />
        ))}
      </div>
      <h2 className="font-medium text-lg p-2 flex justify-between mb-4">
        <p>Total Products: {context.itemQuantity}</p>
        <p>Total Price: $ {context.itemsPrice.toFixed(2)}</p>
      </h2>
    </aside>
  );
}

export { CheckoutSideMenu };
