import React, { useEffect, useState } from "react";
import { getProducts, addToCart } from "../utils/storage";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <div>
      <h2>Termékek</h2>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <b>{prod.name}</b> – {prod.price} Ft
            <button onClick={() => addToCart(prod.id)}>Kosárba</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;