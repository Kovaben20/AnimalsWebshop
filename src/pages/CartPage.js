import React, { useEffect, useState } from "react";
import { getCart, removeFromCart, getProducts } from "../utils/storage";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const products = getProducts();
  const total =
    cart.reduce(
      (sum, itemId) =>
        sum + (products.find((p) => p.id === itemId)?.price || 0),
      0
    ) || 0;

  return (
    <div>
      <h2>Kosár</h2>
      {cart.length === 0 ? (
        <p>A kosár üres.</p>
      ) : (
        <ul>
          {cart.map((id, idx) => {
            const prod = products.find((p) => p.id === id);
            if (!prod) return null;
            return (
              <li key={idx}>
                {prod.name} – {prod.price} Ft
                <button onClick={() => handleRemove(id)}>Eltávolítás</button>
              </li>
            );
          })}
        </ul>
      )}
      <p>Összesen: {total} Ft</p>
    </div>
  );
};

export default CartPage;