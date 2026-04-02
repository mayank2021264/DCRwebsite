import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ProductsPreview from "../components/ProductPreview";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ProductsPreview />
      <WhyChooseUs />
    </main>
  );
}