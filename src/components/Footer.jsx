import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Find Us", path: "/findus" },
  { label: "Contact Us", path: "/contact" },
];

const productCategories = [
  { label: "Ferro Alloys", path: "/products" },
  { label: "Non Ferrous Metals", path: "/products" },
  { label: "Ores & Minerals", path: "/products" },
  { label: "Carbon Products", path: "/products" },
  { label: "Refractories", path: "/products" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-[#0B1626] to-[#070E18] text-gray-400">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-16 gap-y-12">

        {/* Column 1 – Brand */}
        <div className="space-y-6 max-w-sm">
          <Link to="/" className="flex items-center gap-4 group w-fit">
            <img
              src={logo}
              alt="DCR Logo"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-tight">
              <p className="text-white font-semibold text-lg tracking-wide">
                Durga Ceramics
              </p>
              <p className="text-[#29ABE2] font-medium text-sm">
                &amp; Refractories
              </p>
            </div>
          </Link>

          <p className="text-sm leading-relaxed text-gray-400">
            Trusted supplier of high-quality refractories, ferro alloys,
            non-ferrous metals, ores and industrial minerals to foundries and
            steel plants worldwide.
          </p>

          <Link
            to="/contact"
            className="inline-block px-6 py-2.5 rounded-md bg-[#29ABE2] hover:bg-[#1e8fc8]
            text-white text-sm font-semibold tracking-wide transition duration-300
            shadow-md hover:shadow-[#29ABE2]/30"
          >
            Request a Quote
          </Link>
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
            Quick Links
          </h4>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="text-sm hover:text-[#29ABE2] transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Products */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
            Our Products
          </h4>

          <ul className="space-y-3">
            {productCategories.map((cat) => (
              <li key={cat.label}>
                <Link
                  to={cat.path}
                  className="text-sm hover:text-[#29ABE2] transition duration-200"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 – Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
            Contact
          </h4>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                Email
              </p>
              <a
                href="mailto:durgaceramics@gmail.com"
                className="hover:text-[#29ABE2] transition"
              >
                info@durgarefractories.com
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                Phone
              </p>
              <a href="tel:+911204163255" className="block hover:text-[#29ABE2] transition">
                +91-120 4163255
              </a>
              <a href="tel:+911204127791" className="block hover:text-[#29ABE2] transition">
                +91-120 4127791
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                Business Hours
              </p>
              <p>Mon – Sat: 10AM – 6PM</p>
              <p className="text-gray-500 text-xs">Sunday Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row
        items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {currentYear} Durga Ceramics &amp; Refractories. All rights reserved.
          </p>
          <p className="opacity-70">
            Designed &amp;  Developed with ❤️ in BHARAT by{" "}
            <a
              href="https://mayankiiitd.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#29ABE2] transition"
            >
              Mayank Pandey
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}