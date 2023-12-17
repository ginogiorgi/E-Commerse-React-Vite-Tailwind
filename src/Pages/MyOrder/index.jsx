import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center relative w-80 justify-center mb-2">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-8 w-8 text-white stroke-white hover:text-[#FF0000] hover:stroke-[#FF0000]" />
        </Link>

        <h1>My Order</h1>
      </div>
      <div className="h-auto w-80">
        {context.order?.slice(-1)[0].products.map((item) => (
          <OrderCard props={item} key={item.id} />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center mb-1">
          <span className="font-light">Total Products: </span>
          <span className="font-medium text-2xl">{context.itemQuantity}</span>
        </p>
        <p className="flex justify-between items-center mt-1">
          <span className="font-light">Total Price: </span>
          <span className="font-medium text-2xl">
            $ {context.itemsPrice.toFixed(2)}
          </span>
        </p>
      </div>
    </Layout>
  );
}

export { MyOrder };
