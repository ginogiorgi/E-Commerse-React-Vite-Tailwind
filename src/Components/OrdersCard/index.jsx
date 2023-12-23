import { ChevronRightIcon } from "@heroicons/react/24/solid";

function OrdersCard(props) {
  return (
    <div className="flex justify-between items-center p-4 mb-3 border border-myGray/25  rounded-lg w-96 h-24">
      <div className="w-full flex justify-between">
        <p className="flex flex-col">
          <span className="font-light">{props.date}</span>
          <span className="font-light">{props.totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">
            ${props.totalPrice.toFixed(2)}
          </span>
          <ChevronRightIcon className="h-8 w-8 text-white stroke-white" />
        </p>
      </div>
    </div>
  );
}

export { OrdersCard };
