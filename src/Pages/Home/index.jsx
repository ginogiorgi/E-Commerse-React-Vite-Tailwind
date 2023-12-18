import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-white w-80 p-4 text-white mb-4 bg-black hover:border-blue-400 focus:border-blue-400 outline-none"
        onChange={(event) => {
          context.setSearchByTitle(event.target.value);
        }}
      />
      <div className="flex items-center w-full left-0">
        <div
          className="grid gap-6 grid-cols-auto-fill-100 w-full justify-center"
          id="CardsContainer"
        >
          {context.items?.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
