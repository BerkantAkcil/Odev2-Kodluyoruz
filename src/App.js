import React from "react";
import "./style.css";
import React from "react";
import Navbar from "./Navbar";
import Gratser from "./Gratser";
import TechDemo from "./TechDemo";
import Us from "./Us";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Gratser />
      <TechDemo />
      <Us />
      <Footer />
    </div>
  );
}
