import React from "react";
export default function About() {
  return (
    <section className="bg-[#0D1B2A] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ── Section Label ── */}
        <div className="flex items-center gap-3 mb-16">
          <span className="h-\[2px\] w-10 bg-[#29ABE2] rounded-full" />
          <span className="text-[#29ABE2] text-xs font-semibold tracking-widest uppercase">
            Who We Are
          </span>
        </div>

        {/* ── Two Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Image ── */}
          <div className="relative group w-full max-w-md mx-auto">
            {/* Decorative border behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#29ABE2]/30 rounded-xl z-0
              transition-all duration-300 group-hover:-top-5 group-hover:-left-5" />

            <img
              src="/img/sid.png"
              alt="Durga Ceramics & Refractories"
              className="relative z-10 w-full h-\[420px\] object-cover rounded-xl shadow-2xl
                shadow-black/40"
            />

            {/* ── Floating badge on image ── */}
            <div className="absolute bottom-6 right-6 z-20 bg-[#0D1B2A]/90 backdrop-blur-sm
              border border-[#29ABE2]/30 rounded-lg px-5 py-3 shadow-xl">
              <p className="text-[#29ABE2] text-xs font-semibold tracking-widest uppercase mb-1">
                Mr. Siddharth Newar
              </p>
              <p className="text-white text-sm font-medium">
                CEO - Durga Ceramics & Refractories
              </p>
            </div>
          </div>

          {/* ── RIGHT: Text Content ── */}
          <div className="flex flex-col gap-6">

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              About{" "}
              <span className="text-[#29ABE2]">Durga Ceramics</span>{" "}
              &amp; Refractories
            </h2>

            {/* Divider */}
            <div className="h-\[3px\] w-16 bg-[#29ABE2] rounded-full" />

            {/* Paragraphs */}
            <p className="text-gray-300 text-base leading-relaxed">
              Durga Ceramics &amp; Refractories is a trusted supplier of high-quality
              refractories, ferro alloys, non-ferrous metals, ores and industrial minerals.
              We serve foundries, steel plants and manufacturing industries with reliable
              materials sourced from certified suppliers.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              In addition to our domestic operations, we also export materials to
              international clients, supplying products as per specific technical
              requirements and industry standards.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              Our focus is simple — to deliver{" "}
              <span className="text-white font-semibold">consistent quality</span>,{" "}
              <span className="text-white font-semibold">dependable supply</span> and{" "}
              <span className="text-white font-semibold">customer-focused solutions</span>{" "}
              that support industrial performance and long-term growth.
            </p>

            {/* ── Key Highlights ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {[
                { icon: "🏭", label: "Domestic Supply" },
                { icon: "🌍", label: "International Export" },
                { icon: "✅", label: "Certified Sources" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-[#1E293B] border border-white/10
                    rounded-lg px-4 py-3 hover:border-[#29ABE2]/40 transition-all duration-200"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-300 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* ── CTA Button ── */}
            <div className="mt-2">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#29ABE2]
                  hover:bg-[#1a90c8] text-white font-semibold text-sm tracking-wide
                  transition-all duration-200 shadow-lg hover:shadow-[#29ABE2]/30
                  hover:shadow-xl active:scale-95"
              >
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}