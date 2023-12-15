import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductCartOpen ? "" : "hidden"
      } w-[360px] h-5/6 m-2 top-[68px] flex-col fixed right-0 rounded-lg bg-black shadow-[0_0_15px_7px] shadow-myGray/40 z-20`}
    >
      <h2 className="font-medium text-xl">My Order</h2>
      <div className="m-3">
        {context.cartProducts.map((item) => (
          <OrderCard props={item} key={item.id} />
        ))}
      </div>
    </aside>
  );
}

export { CheckoutSideMenu };
