import React from "react";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Productive from "./components/Productive/Productive";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="bg-darkBlue h-screen text-white">
      <Navbar />
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <Footer />
    </div>
  );
}









export default App;
