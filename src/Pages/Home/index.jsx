import { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { data } from "autoprefixer";

function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) =>
      response.json().then((data) => setItems(data))
    );
  }, []);
  return (
    <Layout>
      <div className="grid gap-6 m-5 grid-cols-auto-fill-100 w-full justify-center">
        {items?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </Layout>
  );
}

export { Home };
