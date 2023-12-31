import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  function renderView() {
    if (context.filteredItems?.length > 0) {
      return (
        <div
          className="grid gap-6 grid-cols-auto-fill-100 w-full justify-center"
          id="CardsContainer"
        >
          {context.filteredItems?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      );
    } else if (context.searchByTitle.length > 0) {
      return (
        <div className="absolute left-0 right-0 ml-auto mr-auto w-40 top-1/3">
          <h2 className="text-4xl text-center mb-20">Products not found</h2>
        </div>
      );
    }
  }

  return (
    <Layout>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-white w-2/6 p-4 text-white mb-4 bg-black hover:border-blue-400 focus:border-blue-400 outline-none text-center"
        onChange={(event) => {
          context.setSearchByTitle(event.target.value);
          context.setIsProductDetailOpen(false);
        }}
      />
      <div className="flex items-center w-full left-0 mt-6">{renderView()}</div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
