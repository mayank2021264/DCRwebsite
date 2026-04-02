import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { categories, products } from "../data/productsData";

// ── Product Card ──────────────────────────────────────────────
function ProductCard({ product, onViewMore }) {
  return (
    <div className="bg-[#1E293B] rounded-xl overflow-hidden border border-white/10
      hover:border-[#29ABE2]/40 transition-all duration-300 hover:shadow-xl
      hover:shadow-[#29ABE2]/10 hover:-translate-y-1 flex flex-col">

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + Button */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <h3 className="text-white font-semibold text-base">{product.name}</h3>
        <button
          onClick={() => onViewMore(product)}
          className="w-full py-2 rounded-md border border-[#29ABE2] text-[#29ABE2]
            text-sm font-semibold hover:bg-[#29ABE2] hover:text-white
            transition-all duration-200 active:scale-95"
        >
          View More
        </button>
      </div>
    </div>
  );
}

// ── Product Modal / Popup ─────────────────────────────────────
function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8
        bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="relative bg-[#1E293B] border border-white/10 rounded-2xl
          w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10
            hover:bg-white/20 text-white transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* ── LEFT: Image ── */}
          <div className="flex flex-col">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
            {/* Note below image */}
            <div className="bg-[#0D1B2A]/80 px-5 py-3 rounded-bl-2xl md:rounded-none">
              <p className="text-[#29ABE2] text-xs font-semibold text-center">
                📐 Sizes and specifications are available as per your requirements.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Details ── */}
          <div className="p-6 md:p-8 flex flex-col gap-5 overflow-y-auto">

            {/* Product Name */}
            <div>
              <span className="text-[#29ABE2] text-xs font-semibold tracking-widest uppercase">
                {categories.find((c) => c.id === product.category)?.label}
              </span>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-white mt-1"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {product.name}
              </h2>
            </div>

            {/* Divider */}
            <div className="h-\[2px\] w-12 bg-[#29ABE2] rounded-full" />

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {product.details.description}
            </p>

            {/* Applications */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-2 tracking-wide uppercase">
                Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.details.applications.map((app) => (
                  <span
                    key={app}
                    className="px-3 py-1 rounded-full bg-[#29ABE2]/10 border border-[#29ABE2]/30
                      text-[#29ABE2] text-xs font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>


            {/* Specifications */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-3 tracking-wide uppercase">
                Specifications
              </h4>

              {product.details.specifications.type === "custom" ? (
                // ── Simple text line for products with no fixed specs ──
                <div className="flex items-start gap-3 bg-[#29ABE2]/10 border border-[#29ABE2]/30
                  rounded-lg px-5 py-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#29ABE2] shrink-0 mt-0.5"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[#29ABE2] text-sm font-medium leading-relaxed">
                    {product.details.specifications.message}
                  </p>
                </div>
              ) : (
                // ── Grade table for products with fixed specs ──
                <div className="rounded-lg overflow-hidden border border-white/10">
                  {/* Table Head */}
                  <div
                    className="grid text-xs font-bold uppercase tracking-wide
                      bg-[#29ABE2]/20 border-b border-white/10"
                    style={{
                      gridTemplateColumns: product.details.specifications.headers.length === 3
                        ? "1fr 1fr 1fr" : "1fr 1fr",
                    }}
                  >
                    {product.details.specifications.headers.map((header) => (
                      <div key={header} className="px-4 py-2.5 text-[#29ABE2]">
                        {header}
                      </div>
                    ))}
                  </div>
                  {/* Table Rows */}
                  {product.details.specifications.rows.map((row, index) => (
                    <div
                      key={index}
                      className={`grid text-sm ${index % 2 === 0 ? "bg-white/5" : "bg-transparent"}`}
                      style={{
                        gridTemplateColumns: product.details.specifications.headers.length === 3
                          ? "1fr 1fr 1fr" : "1fr 1fr",
                      }}
                    >
                      <div className="px-4 py-2.5 text-gray-400 font-medium">{row[0]}</div>
                      <div className="px-4 py-2.5 text-white font-semibold">{row[1]}</div>
                      {product.details.specifications.headers.length === 3 && (
                        <div className="px-4 py-2.5 text-white font-semibold">{row[2]}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Request Quote Button */}
            <Link
              to="/contact"
              onClick={onClose}
              className="mt-auto w-full py-3 rounded-md bg-[#29ABE2] hover:bg-[#1a90c8]
                text-white font-semibold text-sm text-center tracking-wide
                transition-all duration-200 shadow-lg hover:shadow-[#29ABE2]/30
                active:scale-95"
            >
              Request Quote for {product.name}
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Products Page ────────────────────────────────────────
export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <Navbar />

      {/* ── Page Header ── */}
      <div className="pt-32 pb-12 px-6 text-center border-b border-white/10">
        <span className="inline-block mb-4 px-4 py-1 rounded-full border border-[#29ABE2]/50
          text-[#29ABE2] text-xs font-semibold tracking-widest uppercase bg-[#29ABE2]/10">
          Our Catalogue
        </span>
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Our <span className="text-[#29ABE2]">Products</span>
        </h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
          Browse our complete range of refractories, ferro alloys, non-ferrous metals
          and industrial minerals — all sourced from certified suppliers.
        </p>
      </div>

      {/* ── Category Sections ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-20">
        {categories.map((category) => {
          const categoryProducts = products.filter((p) => p.category === category.id);
          return (
            <div key={category.id}>

              {/* Category Heading */}
              <div className="flex items-center gap-3 mb-3">
                <span className="h-\[2px\] w-10 bg-[#29ABE2] rounded-full" />
                <span className="text-[#29ABE2] text-xs font-semibold tracking-widest uppercase">
                  Category
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-white mb-2"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {category.label}
              </h2>
              <p className="text-gray-400 text-sm max-w-2xl mb-8 leading-relaxed">
                {category.description}
              </p>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewMore={setSelectedProduct}
                  />
                ))}
              </div>

              {/* Category Divider */}
              <div className="mt-16 h-px bg-white/10 rounded-full" />
            </div>
          );
        })}
      </div>

      {/* ── Contact CTA at bottom ── */}
      <div className="bg-[#1E293B] border-t border-white/10 py-16 px-6 text-center">
        <h3
          className="text-3xl font-extrabold text-white mb-3"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Can't find what you're looking for?
        </h3>
        <p className="text-gray-400 text-sm mb-6">
          We supply a wide range of materials beyond what's listed. Get in touch and we'll source it for you.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-[#29ABE2]
            hover:bg-[#1a90c8] text-white font-semibold text-sm tracking-wide
            transition-all duration-200 shadow-lg hover:shadow-[#29ABE2]/30 active:scale-95"
        >
          Contact Us
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* ── Modal ── */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}