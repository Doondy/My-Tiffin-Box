import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/CartPage.css";

export default function CartPage() {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || null; // Plan from Pricing
  const selectedItems = location.state?.selectedItems || []; // Items from OrderPage

  // Local cart state
  const [cartItems, setCartItems] = useState([]);

  // Load initial cart from passed data
  useEffect(() => {
    let initialCart = [];
    if (selectedPlan) initialCart.push({ ...selectedPlan, type: "plan" });
    if (selectedItems.length > 0) {
      selectedItems.forEach((item) => {
        initialCart.push({ ...item, type: "item" });
      });
    }
    setCartItems(initialCart);
  }, [selectedPlan, selectedItems]);

  const removeItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    // Extract number from price string like "₹120/day"
    const priceNum = parseInt(item.price.replace(/[^0-9]/g, ""));
    return total + priceNum;
  }, 0);

  return (
    <section className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, idx) => (
            <div key={idx} className="cart-item-card">
              <h4>
                {item.type === "plan" ? "Plan: " : "Item: "}
                {item.title || item.name}
              </h4>
              {item.desc && <p>{item.desc}</p>}
              <p>Price: {item.price}</p>
              <button className="btn-secondary" onClick={() => removeItem(idx)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total: ₹{totalPrice}</h3>
          <button className="btn-primary">Proceed to Checkout</button>
        </div>
      )}
    </section>
  );
}