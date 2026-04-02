import React from "react";

const reasons = [
  {
    number: "01",
    title: "Consistent Quality",
    description:
      "Reliable materials sourced from trusted and certified industry suppliers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Industry Experience",
    description:
      "Years of experience serving steel plants and foundry industries.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Wide Product Range",
    description:
      "Comprehensive supply of refractories, ferro alloys, and industrial minerals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Reliable Supply",
    description:
      "Timely delivery and dependable sourcing for consistent industrial requirements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Customer-Focused Approach",
    description:
      "Solutions tailored to meet specific technical and operational requirements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0D1B2A] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header — left aligned, matches ProductsPreview ── */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-10 bg-[#29ABE2] rounded-full" />
          <span className="text-[#29ABE2] text-xs font-semibold tracking-widest uppercase">
            Why Us
          </span>
        </div>

        {/* Heading + subtext — same pattern as ProductsPreview */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-xl"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Why Choose{" "}
            <span className="text-[#29ABE2]">Us</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-sm md:text-right leading-relaxed">
            We go beyond supplying materials — we build partnerships rooted
            in trust, quality and long-term industrial growth.
          </p>
        </div>

        {/* ── Cards Grid — 3 top, 2 bottom centered ── */}
        <div className="flex flex-col gap-6">

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.slice(0, 3).map((reason) => (
              <WhyCard key={reason.number} reason={reason} />
            ))}
          </div>

          {/* Row 2 — 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
            {reasons.slice(3).map((reason) => (
              <WhyCard key={reason.number} reason={reason} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function WhyCard({ reason }) {
  return (
    <div className="group relative bg-[#1E293B] border border-white/10 rounded-xl p-7
      hover:border-[#29ABE2]/50 transition-all duration-300
      hover:shadow-xl hover:shadow-[#29ABE2]/10 hover:-translate-y-1 overflow-hidden">

      {/* Large faded number in background */}
      <span
        className="absolute top-3 right-4 text-6xl font-black text-white/5
          group-hover:text-[#29ABE2]/10 transition-all duration-300 select-none"
        style={{ fontFamily: "'Rajdhani', sans-serif" }}
      >
        {reason.number}
      </span>

      {/* Icon */}
      <div className="p-3 rounded-xl bg-[#29ABE2]/10 border border-[#29ABE2]/20
        text-[#29ABE2] w-fit mb-5 group-hover:bg-[#29ABE2]/20 transition-all duration-300">
        {reason.icon}
      </div>

      {/* Title */}
      <h3
        className="text-white font-bold text-lg mb-2"
        style={{ fontFamily: "'Rajdhani', sans-serif" }}
      >
        {reason.title}
      </h3>

      {/* Animated underline */}
      <div className="h-[2px] w-8 bg-[#29ABE2]/50 rounded-full mb-3
        group-hover:w-12 group-hover:bg-[#29ABE2] transition-all duration-300" />

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {reason.description}
      </p>

    </div>
  );
}