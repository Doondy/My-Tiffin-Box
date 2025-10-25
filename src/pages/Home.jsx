import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Home.css";
import heroImage from "../assets/tiffinbox.png"; // Main hero image
import sideImage from "../assets/HealthyFood.png"; // Optional decorative image

export default function Home() {
  const navigate = useNavigate(); // Initialize navigate

  const handleOrderNow = () => {
    navigate("/order"); // Navigate to OrderPage
  };

  const handleViewMenu = () => {
    navigate("/menu"); // Navigate to MenuPage
  };

  return (
    <section className="home">
      <div className="container home-inner">

        {/* Text Section */}
        <div className="text-section">
          <h2>
            Fast, Fresh, Healthy and Homemade <span>Tiffins</span> Delivered Daily 🍱
          </h2>
          <p>
            Enjoy delicious home-cooked meals prepared with love and delivered to your door every day.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={handleOrderNow}>
              Order Now
            </button>
            <button className="btn-secondary" onClick={handleViewMenu}>
              View Menu
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img
            src={heroImage}
            alt="Tiffin Meal"
            className="hero-image"
            style={{ width: "100px" }}
          />
          <img
            src={sideImage}
            alt="Healthy Food"
            className="side-image"
            width={"100px"}
            height={"auto"}
          />
        </div>

      </div>
    </section>
  );
}