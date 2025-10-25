import React from "react";
import "../styles/Menu.css";

export default function Menu() {
  const items = [
    { name: "Veg Thali", desc: "Dal, Rice, Roti, Sabzi", price: "₹120" },
    { name: "Mini Meal", desc: "1 Curry + 2 Chapatis + Salad", price: "₹90" },
    { name: "South Indian Combo", desc: "Sambar, Rasam, Rice, Appalam", price: "₹110" },
  ];

  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {items.map((item, idx) => (
          <div key={idx} className="menu-card">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}