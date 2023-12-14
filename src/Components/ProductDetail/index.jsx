import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function ProductDetail() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "" : "hidden"
      } w-[360px] h-5/6 m-2 top-[68px] flex-col fixed right-0 rounded-lg bg-black shadow-[0_0_15px_5px] shadow-myGray/40 border`}
    >
      <div className="items-center justify-between flex">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          onClick={() => {
            context.setIsProductDetailOpen(false);
          }}
        >
          <XMarkIcon className="h-8 w-8 text-white stroke-white" />
        </div>
      </div>
    </aside>
  );
}

export { ProductDetail };
