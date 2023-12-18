import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  function renderView() {
    if (context.order?.length > 0) {
      return context.order?.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            date={order.date}
          />
        </Link>
      ));
    } else {
      return <div>You have no orders in progress</div>;
    }
  }
  return (
    <Layout>
      <div className="flex items-center relative w-80 justify-center mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {renderView()}
    </Layout>
  );
}

export { MyOrders };
