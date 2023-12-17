import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function OrdersCard(props) {
  const context = useContext(ShoppingCartContext);

  return (
    <div className="flex justify-between items-center p-2 border-y border-myGray/25">
      <p>
        <span>{props.date}</span>
        <span>{props.totalProducts}</span>
        <span>{props.totalPrice}</span>
      </p>
    </div>
  );
}

export { OrdersCard };
