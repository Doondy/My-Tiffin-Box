import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <img src="/logo.svg" alt="Tiffin Box Logo" />
          <h1>Tiffin<span>Box</span></h1>
        </div>

        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#menu">Menu</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}