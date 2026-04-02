import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ── Add your actual product images inside public/images/ ──
const slides = [
  { image: "/images/hero1.jpg" },
  { image: "/images/hero5.png" },
  { image: "/images/hero2.webp" },
  { image: "/images/hero3.jpg" },
  { image: "/images/hero4.jpg" },
];

const SLIDE_INTERVAL = 4000; // 4 seconds per slide

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 600);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    if (index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 600);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* ── Background Images — only these change ── */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url('${slide.image}')`,
            opacity: index === current ? (animating ? 0 : 1) : 0,
          }}
        />
      ))}

      {/* ── Dark Blue Overlay ── */}
      <div className="absolute inset-0 bg-[#0D1B2A]/65" />

      {/* ── Gradient top & bottom for smooth blending ── */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0D1B2A] via-transparent to-[#0D1B2A]/20" />

      {/* ── STATIC Content — never animates or changes ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Small pill tag above heading */}
        <span className="inline-block mb-5 px-4 py-1 rounded-full border border-[#29ABE2]/50
          text-[#29ABE2] text-xs font-semibold tracking-widest uppercase bg-[#29ABE2]/10">
          Durga Ceramics &amp; Refractories
        </span>

        {/* Main Heading — fully static */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl leading-tight mb-5"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Premium Refractories &amp;{" "}
          <span className="text-[#29ABE2]">Industrial Minerals</span>
        </h1>

        {/* Static Subtitle */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Supplying all sorts of Refractories, Ferro Alloys, Non Ferrous Metals,
          Ores and Minerals for diverse Industrial Applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">

          {/* View Products */}
          <Link
            to="/products"
            className="px-8 py-3 rounded-md bg-[#29ABE2] hover:bg-[#1a90c8] text-white font-semibold
              text-sm tracking-wide transition-all duration-200 shadow-lg
              hover:shadow-[#29ABE2]/40 hover:shadow-xl active:scale-95"
          >
            View Products
          </Link>

          {/* Download Brochure — href points to your PDF in /public/brochure.pdf */}
          <a
            href="/DCRbrochure.pdf"
            download
            className="px-8 py-3 rounded-md border border-white/40 hover:border-[#29ABE2]
              text-white font-semibold text-sm tracking-wide transition-all duration-200
              hover:bg-[#29ABE2]/10 active:scale-95 flex items-center gap-2 justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
            Download Brochure
          </a>
        </div>
      </div>

      {/* ── Dot Indicators ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full
              ${current === index
                ? "w-8 h-2 bg-[#29ABE2]"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ── Progress Bar at bottom ── */}
      <div className="absolute bottom-0 left-0 w-full h-\[3px\] bg-white/10 z-10">
        <div
          key={current}
          className="h-full bg-[#29ABE2]"
          style={{ animation: `progressBar ${SLIDE_INTERVAL}ms linear forwards` }}
        />
      </div>

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}