import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function ProductDetail() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "" : "hidden"
      } w-[360px] h-5/6 m-2 top-[68px] flex-col fixed right-0 rounded-lg bg-black shadow-[0_0_15px_7px] shadow-myGray/40`}
    >
      <div
        onClick={() => {
          context.setIsProductDetailOpen(false);
        }}
      >
        <XMarkIcon className="h-8 w-8 text-black stroke-black drop-shadow-[0px_0px_3px_rgba(0,0,0,1)] hover:text-[#FF0000] hover:stroke-[#FF0000] hover:drop-shadow-[0px_0px_5px_rgba(200,0,0,1)] absolute z-10 right-0" />
      </div>
      <figure className="bg-white relative w-full h-3/5 rounded-t-lg">
        <img
          className="w-full h-full object-contain bg-white rounded-t-lg"
          src={context.productToShow.image ? context.productToShow.image : ""}
          alt="productImage"
        />
      </figure>
      <p className="flex flex-col p-2">
        <span className="font-medium text-2xl mb-1">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-lg mb-2">
          {context.productToShow.title}
        </span>
        <span className="font-medium text-sm">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
}

export { ProductDetail };
