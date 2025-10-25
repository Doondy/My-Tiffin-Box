import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/OrderPage.css";

import idliSambarImg from "../assets/order/idliSambar.png";
import dosaImg from "../assets/order/Dosa.png";
import vadaImg from "../assets/order/Vada.png";
import vegNoodlesImg from "../assets/order/VegNoodles.png";
import manchurianImg from "../assets/order/Manchurian.png";
import friedRiceImg from "../assets/order/FriedRice.png";
import vegBurgerImg from "../assets/order/VegBurger.png";
import frenchFriesImg from "../assets/order/FrenchFries.png";
import pizzaSliceImg from "../assets/order/PizzaSlice.png";


export default function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPlan = location.state?.selectedPlan || null;

  const menuItems = {
  "South Indian": [
    { name: "Idli Sambhar", price: "₹50", image: idliSambarImg },
    { name: "Dosa", price: "₹80", image: dosaImg },
    { name: "Vada", price: "₹40", image: vadaImg },
  ],
  Chinese: [
    { name: "Veg Noodles", price: "₹100", image: vegNoodlesImg },
    { name: "Manchurian", price: "₹120", image: manchurianImg },
    { name: "Fried Rice", price: "₹90", image: friedRiceImg },
  ],
  "Fast Food": [
    { name: "Veg Burger", price: "₹60", image: vegBurgerImg },
    { name: "French Fries", price: "₹50", image: frenchFriesImg },
    { name: "Pizza Slice", price: "₹120", image: pizzaSliceImg },
  ],
};


  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddToCart = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const goToCart = () => {
    navigate("/cart", { state: { selectedPlan, selectedItems } });
  };

  return (
    <section className="order-page">
      <h2>Place Your Order</h2>

      {selectedPlan && (
        <div className="selected-plan">
          <h3>Selected Plan: {selectedPlan.title}</h3>
          <p>{selectedPlan.desc}</p>
          <p>Price: {selectedPlan.price}</p>
        </div>
      )}

      {Object.keys(menuItems).map((category, idx) => (
        <div key={idx} className="category-section">
          <h3>{category}</h3>
          <div className="item-grid">
            {menuItems[category].map((item, index) => (
              <div key={index} className="order-item-card">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="order-item-image"
                  />
                )}
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <button
                  className="btn-primary"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {(selectedPlan || selectedItems.length > 0) && (
        <div className="cart-button-container">
          <button className="btn-primary" onClick={goToCart}>
            View Cart ({selectedItems.length} items)
          </button>
        </div>
      )}
    </section>
  );
}
