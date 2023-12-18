import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  function renderView() {
    if (!context.searchByTitle?.length > 0) {
      return context.items?.map((item) => <Card key={item.id} data={item} />);
    } else if (!context.filteredItems?.length > 0) {
      return <div>There are no items that match your search</div>;
    } else {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
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
      <div className="flex items-center w-full left-0">
        <div
          className="grid gap-6 grid-cols-auto-fill-100 w-full justify-center"
          id="CardsContainer"
        >
          {renderView()}
        </div>
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
