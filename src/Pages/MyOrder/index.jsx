import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  let index = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  const accountInfo = JSON.parse(localStorage.getItem("account"));

  accountInfo.orders = context.order;
  localStorage.setItem("account", JSON.stringify(accountInfo));
  if (index === "last") {
    index = context.order?.length - 1;
  }
  function deleteOrder() {
    const newOrder = context.order;

    newOrder.splice(index, 1);
    context.setOrder(newOrder);
    accountInfo.orders = context.order;
    localStorage.setItem("account", JSON.stringify(accountInfo));
  }

  return (
    <Layout>
      <div className="flex items-center relative w-96 justify-center mb-2 h-14">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-10 w-10 text-white stroke-white" />
        </Link>
        <h2 className="text-3xl text-center">My Order</h2>
        <Link
          to="/my-orders"
          className="absolute right-0"
          onClick={() => {
            deleteOrder();
          }}
        >
          <XMarkIcon className="h-10 w-10 text-white stroke-white hover:text-[#FF0000] hover:stroke-[#FF0000]" />
        </Link>
      </div>
      <div className="h-auto w-96">
        {context.order?.[index]?.products.map((item) => (
          <OrderCard props={item} key={item.id} />
        ))}
      </div>
      <div className="w-96">
        <p className="flex justify-between items-center m-3">
          <span className="text-lg font-medium">Total Products: </span>
          <span className="font-bold text-xl">
            {context.order[context.order.length - 1].totalProducts}
          </span>
        </p>
        <p className="flex justify-between items-center m-3">
          <span className="text-lg font-medium">Total Price: </span>
          <span className="font-bold text-xl">
            $ {context.order[context.order.length - 1].totalPrice.toFixed(2)}
          </span>
        </p>
      </div>
    </Layout>
  );
}

export { MyOrder };
