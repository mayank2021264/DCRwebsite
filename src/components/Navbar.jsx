import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Import your logo — adjust path as needed
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Find Us", path: "/findus" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Add shadow + slightly darker bg on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-[#0D1B2A]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* ── LEFT: Logo + Brand Name ── */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="DCR Logo"
            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-tight">
            <p className="text-white font-bold text-lg tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Durga Ceramics
            </p>
            <p className="text-[#29ABE2] font-semibold text-sm tracking-wide">
              &amp; Refractories
            </p>
          </div>
        </Link>

        {/* ── CENTER: Nav Links (Desktop) ── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 pb-1
                    ${isActive ? "text-[#29ABE2]" : "text-gray-300 hover:text-white"}
                  `}
                >
                  {link.label}
                  {/* Active underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#29ABE2] rounded-full transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── RIGHT: Request Quote Button (Desktop) ── */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 rounded-md text-sm font-semibold text-white
              bg-[#29ABE2] hover:bg-[#1a90c8]
              transition-all duration-200 shadow-md hover:shadow-[#29ABE2]/30 hover:shadow-lg
              active:scale-95"
          >
            Request Quote
          </Link>
        </div>

        {/* ── MOBILE: Hamburger Button ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-\[5px\] p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-\[7px\]" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-\[7px\]" : ""}`} />
        </button>
      </div>

      {/* ── MOBILE: Dropdown Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a1628]/98 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-white/10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? "text-[#29ABE2]" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-2 px-5 py-2 rounded-md text-sm font-semibold text-white text-center
              bg-[#29ABE2] hover:bg-[#1a90c8] transition-all duration-200"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}