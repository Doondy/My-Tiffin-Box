import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" type="email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required />
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </section>
  );
}
