import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Pricing.css";

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    { title: "Daily Plan", price: "₹120/day", desc: "Perfect for flexible eaters" },
    { title: "Weekly Plan", price: "₹700/week", desc: "Save ₹140 each week" },
    { title: "Monthly Plan", price: "₹2600/month", desc: "Best for regular subscribers" },
  ];

  const handleChoosePlan = (plan) => {
    navigate("/order", { state: { selectedPlan: plan } });
  };

  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        {plans.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.title}</h3>
            <h4>{p.price}</h4>
            <p>{p.desc}</p>
            <button className="btn-primary" onClick={() => handleChoosePlan(p)}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}