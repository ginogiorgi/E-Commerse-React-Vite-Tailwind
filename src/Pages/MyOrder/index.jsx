import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      My Order
      <div className="h-[390px]">
        {context.order?.slice(-1)[0].products.map((item) => (
          <OrderCard props={item} key={item.id} />
        ))}
      </div>
    </Layout>
  );
}

export { MyOrder };
