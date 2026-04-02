import React from "react";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    name: "Graphite Granules",
    category: "Carbon Products",
    image: "/img/GraphiteGranules.jpeg",
  },
  {
    name: "Ferro Molybdenum",
    category: "Ferro Alloys",
    image: "/img/FerroMolybdenum.jpeg",
  },
  {
    name: "Olivine Sand",
    category: "Ores & Minerals",
    image: "/img/OlivineSand.jpeg",
  },
  {
    name: "Copper",
    category: "Non Ferrous",
    image: "/img/CopperPunching.jpeg",
  },
  {
    name: "Chromium Metal",
    category: "Other Products",
    image: "/img/ChromiumMetal.jpeg",
  },
  {
    name: "Collector Nozzles",
    category: "Refractory Parts",
    image: "/images/hero5.png",
  },
];

export default function ProductsPreview() {
  return (
    <section className="bg-[#0D1B2A] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ── Section Label ── */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-\[2px\] w-10 bg-[#29ABE2] rounded-full" />
          <span className="text-[#29ABE2] text-xs font-semibold tracking-widest uppercase">
            What We Offer
          </span>
        </div>

        {/* ── Heading + Subtext ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-xl"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Our <span className="text-[#29ABE2]">Featured</span> Products
          </h2>
          <p className="text-gray-400 text-sm max-w-sm md:text-right leading-relaxed">
            A glimpse of our wide range of industrial materials and refractory solutions.
          </p>
        </div>

        {/* ── 3x2 Product Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="group bg-[#1E293B] rounded-xl overflow-hidden border border-white/10
                hover:border-[#29ABE2]/50 transition-all duration-300
                hover:shadow-xl hover:shadow-[#29ABE2]/10 hover:-translate-y-1"
            >
              {/* ── Image ── */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500
                    group-hover:scale-105"
                />
                {/* Category tag on image */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs
                  font-semibold bg-[#0D1B2A]/80 backdrop-blur-sm text-[#29ABE2]
                  border border-[#29ABE2]/30">
                  {product.category}
                </span>
              </div>

              {/* ── Product Name Below Image ── */}
              <div className="px-5 py-4 flex items-center justify-between">
                <h3 className="text-white font-semibold text-base tracking-wide">
                  {product.name}
                </h3>
                {/* Small arrow icon */}
                
              </div>
            </div>
          ))}
        </div>

        {/* ── View All Products Button ── */}
        <div className="flex justify-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-md
              border-2 border-[#29ABE2] text-[#29ABE2] font-semibold text-sm tracking-wide
              hover:bg-[#29ABE2] hover:text-white transition-all duration-300
              shadow-lg hover:shadow-[#29ABE2]/30 hover:shadow-xl active:scale-95"
          >
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}