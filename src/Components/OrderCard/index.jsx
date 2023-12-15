import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function OrderCard(props) {
  const context = useContext(ShoppingCartContext);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20 bg-white justify-center">
          <img
            className="w-full h-full object-contain bg-white"
            src={props.props.image}
            alt={props.props.title}
          />
        </figure>
        <p className="text-sm font-light">{props.props.title}</p>
        <div>
          <p className="text-sm font-light">{props.props.quantity}</p>
          <button
            onClick={() => {
              context.setItemQuantity(context.itemQuantity - 1);
              props.props.quantity--;
              console.log(context.itemQuantity);
            }}
          >
            -
          </button>
        </div>
      </div>
      <div>
        <p className="text-lg font-medium">{props.props.price}</p>
        <div>
          <XMarkIcon className="h-8 w-8 text-white stroke-white drop-shadow-[0px_0px_3px_rgba(255,255,255,1)] hover:text-[#FF0000] hover:stroke-[#FF0000] hover:drop-shadow-[0px_0px_5px_rgba(200,0,0,1)] absolute z-10 right-0" />
        </div>
      </div>
    </div>
  );
}

export { OrderCard };
