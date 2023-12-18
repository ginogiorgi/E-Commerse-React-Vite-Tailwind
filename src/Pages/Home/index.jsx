import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  function renderView() {
    if (context.searchedItems?.length > 0) {
      return (
        <div
          className="grid gap-6 grid-cols-auto-fill-100 w-full justify-center"
          id="CardsContainer"
        >
          {context.searchedItems?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      );
    } else if (context.searchByTitle.length > 0) {
      return (
        <div className="absolute left-0 right-0 ml-auto mr-auto w-28 top-2/4">
          No se encontraron productos
        </div>
      );
    }
  }

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
      <div className="flex items-center w-full left-0">{renderView()}</div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
