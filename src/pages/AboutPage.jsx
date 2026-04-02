import React from "react";
const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Uncompromising Quality",
    description:
      "Every material we supply undergoes strict quality checks. We source exclusively from certified suppliers to ensure our clients receive consistent, reliable products every time.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Customer First",
    description:
      "We believe in building long-term partnerships, not just transactions. Our team works closely with each client to understand their specific requirements and deliver tailored solutions.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Global Reach",
    description:
      "From domestic steel plants to international industrial clients, we supply materials across borders — meeting global standards and specific technical requirements with precision.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Dependable Supply",
    description:
      "Consistent availability and on-time delivery are at the core of our operations. We maintain strong supplier networks to ensure uninterrupted supply even for large or urgent orders.",
  },
];

const offerings = [
  { label: "Ferro Alloys", desc: "Ferro Molybdenum, Ferro Vanadium, Ferro Titanium, Ferro Aluminium, Ferro Silicon Calcium, Silicon Mangnesium (Inoculants/Nodulizers)" },
  { label: "Non Ferrous Metals", desc: "Copper, Nickel, Tin etc." },
  { label: "Ores & Minerals", desc: "Zircon Sand, Zircon Flour, Chromite Sand, Olivine Sand, Sillimanite Sand, Perlite Slax-30" },
  { label: "Carbon Products", desc: "Calcined Petroleum Coke(CPC), Graphite Granules, Carbon Raisers" },
  { label: "Refractories", desc: "High Alumina Bricks, H.A. Nozzles, Graphite StopperHeads, Ladle Sleeves, Bottom Pouring sets" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0D1B2A]">

      {/* ── Page Header ── */}
      <div className="pt-32 pb-12 px-6 text-center border-b border-white/10">
        <span className="inline-block mb-4 px-4 py-1 rounded-full border border-[#29ABE2]/50
          text-[#29ABE2] text-xs font-semibold tracking-widest uppercase bg-[#29ABE2]/10">
          Our Story
        </span>
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          About <span className="text-[#29ABE2]">Us</span>
        </h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
          A trusted name in industrial refractories and minerals — built on quality,
          reliability and a commitment to our clients' success.
        </p>
      </div>

      {/* ── Who We Are ── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
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

          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#29ABE2] rounded-full" />
              <span className="text-[#29ABE2] text-xs font-semibold tracking-widest uppercase">
                Who We Are
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              Durga Ceramics &amp;{" "}
              <span className="text-[#29ABE2]">Refractories</span>
            </h2>
            <div className="h-[3px] w-14 bg-[#29ABE2] rounded-full" />
            <p className="text-gray-300 text-base leading-relaxed">
              Durga Ceramics &amp; Refractories is a trusted supplier of high-quality
              refractories, ferro alloys, non-ferrous metals, ores and industrial minerals.
              We serve foundries, steel plants and manufacturing industries with reliable
              materials sourced from certified suppliers.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              Founded with a vision to bridge the gap between quality raw material
              suppliers and industrial consumers, we have grown into a dependable partner
              for businesses across India and international markets. Our strength lies in
              our supplier network, technical knowledge and unwavering focus on customer
              satisfaction.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              In addition to our domestic operations, we export materials to international
              clients, supplying products as per specific technical requirements and
              industry standards — ensuring every consignment meets the highest benchmarks.
            </p>
          </div>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <div className="bg-[#111827] border-y border-white/10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-[#1E293B] rounded-2xl p-8 border border-white/10
            hover:border-[#29ABE2]/40 transition-all duration-300">
            <div className="p-3 rounded-xl bg-[#29ABE2]/10 border border-[#29ABE2]/20 w-fit mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#29ABE2]"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Our Mission
            </h3>
            <div className="h-[2px] w-10 bg-[#29ABE2] rounded-full mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              To deliver consistent quality, dependable supply and customer-focused
              solutions that support industrial performance and long-term growth. We aim
              to be the most reliable material supply partner for every client we serve —
              regardless of order size or location.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#1E293B] rounded-2xl p-8 border border-white/10
            hover:border-[#29ABE2]/40 transition-all duration-300">
            <div className="p-3 rounded-xl bg-[#29ABE2]/10 border border-[#29ABE2]/20 w-fit mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#29ABE2]"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Our Vision
            </h3>
            <div className="h-[2px] w-10 bg-[#29ABE2] rounded-full mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              To become a globally recognized supplier of industrial materials — known
              for quality, integrity and innovation. We envision expanding our reach
              across emerging markets while maintaining the personal attention and
              reliability that defines our service today.
            </p>
          </div>
        </div>
      </div>

      {/* ── What We Offer ── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-[#29ABE2] rounded-full" />
            <span className="text-[#29ABE2] text-xs font-semibold tracking-widest uppercase">
              Product Range
            </span>
            <span className="h-[2px] w-10 bg-[#29ABE2] rounded-full" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-white"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            What We <span className="text-[#29ABE2]">Offer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, index) => (
            <div
              key={item.label}
              className="bg-[#1E293B] border border-white/10 rounded-xl p-6
                hover:border-[#29ABE2]/40 transition-all duration-300
                hover:shadow-xl hover:shadow-[#29ABE2]/10 hover:-translate-y-1"
            >
              <div className="text-[#29ABE2] text-3xl font-black mb-3 opacity-20"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                0{index + 1}
              </div>
              <h4 className="text-white font-bold text-base mb-2"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                {item.label}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our Values ── */}
      <div className="bg-[#111827] border-y border-white/10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-[#29ABE2] rounded-full" />
              <span className="text-[#29ABE2] text-xs font-semibold tracking-widest uppercase">
                What Drives Us
              </span>
              <span className="h-[2px] w-10 bg-[#29ABE2] rounded-full" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              Our Core <span className="text-[#29ABE2]">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#1E293B] border border-white/10 rounded-xl p-6 flex flex-col gap-4
                  hover:border-[#29ABE2]/40 transition-all duration-300
                  hover:shadow-xl hover:shadow-[#29ABE2]/10 hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-[#29ABE2]/10 border border-[#29ABE2]/20 w-fit
                  text-[#29ABE2]">
                  {value.icon}
                </div>
                <h4 className="text-white font-bold text-base"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  {value.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Ready to Work <span className="text-[#29ABE2]">With Us?</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Whether you're looking for a one-time supply or a long-term partner,
            we're here to help. Reach out to our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 rounded-md bg-[#29ABE2] hover:bg-[#1a90c8] text-white
                font-semibold text-sm tracking-wide transition-all duration-200
                shadow-lg hover:shadow-[#29ABE2]/30 active:scale-95"
            >
              Get In Touch
            </a>
            <a
              href="/products"
              className="px-8 py-3 rounded-md border border-white/30 hover:border-[#29ABE2]
                text-white font-semibold text-sm tracking-wide transition-all duration-200
                hover:bg-[#29ABE2]/10 active:scale-95"
            >
              View Our Products
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}