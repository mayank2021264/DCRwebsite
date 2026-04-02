import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import FindUs from "./pages/FindUs";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/findus" element={<FindUs />} />
        <Route path="/about" element={<AboutPage />} />
        {/* We'll add more routes as we build each page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;