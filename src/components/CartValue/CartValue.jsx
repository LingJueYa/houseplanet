import React from "react";
import { useSelector } from "react-redux";

const CartValue = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className="cart-summary">
        <p>Total Number of Plants: {totalItems}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
    </>
  );
};

export default CartValue;
