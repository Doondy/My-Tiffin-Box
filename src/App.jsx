import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Pricing from "./pages/Pricing";
import OrderPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";
import Contact from "./pages/Contact";
import About from "./pages/About";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Navbar always on top */}
      <Navbar />

      {/* Main page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;