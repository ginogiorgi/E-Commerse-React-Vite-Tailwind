import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <h2 className="font-medium text-xl p-6 text-center underline underline-offset-2">
        My Order
      </h2>
      <div className="h-[390px] w-80">
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
