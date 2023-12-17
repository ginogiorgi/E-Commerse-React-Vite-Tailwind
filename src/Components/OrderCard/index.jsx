import { XMarkIcon, PlusIcon, MinusSmallIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function OrderCard(props) {
  const context = useContext(ShoppingCartContext);
  let renderXMarkIcon;

  if (props.handleDelete) {
    renderXMarkIcon = (
      <div
        className="cursor-pointer w-8"
        onClick={() => {
          context.setItemsPrice(
            context.itemsPrice - props.props.price * props.props.quantity
          );
          context.setItemQuantity(context.itemQuantity - props.props.quantity);
          props.handleDelete(props.props.id);
        }}
      >
        <XMarkIcon className="h-8 w-8 text-white stroke-white hover:text-[#FF0000] hover:stroke-[#FF0000]" />
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center p-2 border-y border-myGray/25">
      <div className="flex">
        <figure className="w-20 h-20 bg-white rounded-lg">
          <img
            className="w-full h-full rounded-lg object-contain"
            src={props.props.image}
            alt={props.props.title}
          />
        </figure>
      </div>
      <div className="grid gap-2 h-20 w-36">
        <p className="truncate align-top mt-2 justify-start">
          {props.props.title}
        </p>
        <div className="flex bottom-0 items-center justify-center gap-1 mb-2">
          <div
            className="cursor-pointer"
            onClick={() => {
              context.setItemQuantity(context.itemQuantity - 1);
              props.props.quantity--;
              context.setItemsPrice(context.itemsPrice - props.props.price);
              props.props.quantity === 0
                ? props.handleDelete(props.props.id)
                : "";
            }}
          >
            <MinusSmallIcon className="h-4 w-4 text-white stroke-white hover:text-[#FF0000] hover:stroke-[#FF0000]" />
          </div>
          <p className="text-lg font-medium">{props.props.quantity}</p>
          <div
            className="cursor-pointer"
            onClick={() => {
              context.setItemQuantity(context.itemQuantity + 1);
              props.props.quantity++;
              context.setItemsPrice(context.itemsPrice + props.props.price);
            }}
          >
            <PlusIcon className="h-4 w-4 text-white stroke-white hover:text-[#008000] hover:stroke-[#008000]" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-left">
        <p className="text-lg font-medium w-16">
          ${(props.props.price * props.props.quantity).toFixed(2)}
        </p>
        {renderXMarkIcon}
      </div>
    </div>
  );
}

export { OrderCard };
