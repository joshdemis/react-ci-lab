import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import VisionMission from "./components/VisionMission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-200 text-neutral-900">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <VisionMission />
      <Contact />
      <Footer />
    </div>
  );
}
