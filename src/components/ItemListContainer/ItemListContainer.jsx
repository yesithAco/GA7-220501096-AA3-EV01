import { useEffect, useState } from "react";
import { products } from "../../mock/products.js";
import ItemList from "../ItemsList/ItemsList.jsx";

const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });
    };

    getProducts()
      .then((data) => setItems(data))
      .catch((error) => console.log("Error:", error))
      .finally(() => console.log("Carga finalizada"));
  }, []);

  return (
    <div>
      <h2>{saludo}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
