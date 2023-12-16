import { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { apiUrl } from "../../api";
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    };
    fetchData();
  }, []);
  console.log(items);
  return (
    <Layout>
      <div className="grid gap-6 grid-cols-auto-fill-100 w-full justify-center">
        {items?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
