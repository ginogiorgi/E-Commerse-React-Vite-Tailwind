import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductCartOpen ? "" : "hidden"
      } w-[360px] h-5/6 m-2 top-[68px] flex-col fixed right-0 rounded-lg bg-black shadow-[0_0_15px_7px] shadow-myGray/40`}
    >
      <h2 className="font-medium text-xl">My Order</h2>
      <div
        onClick={() => {
          context.setIsProductCartOpen(false);
        }}
      >
        <XMarkIcon className="h-8 w-8 text-black stroke-black drop-shadow-[0px_0px_3px_rgba(0,0,0,1)] hover:text-[#FF0000] hover:stroke-[#FF0000] hover:drop-shadow-[0px_0px_5px_rgba(200,0,0,1)] absolute z-10 right-0" />
      </div>
    </aside>
  );
}

export { CheckoutSideMenu };
