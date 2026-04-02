import React from "react";
export default function FindUs() {
  return (
    <div className="min-h-screen bg-[#0D1B2A]">

      {/* ── Page Header ── */}
      <div className="pt-32 pb-12 px-6 text-center border-b border-white/10">
        <span className="inline-block mb-4 px-4 py-1 rounded-full border border-[#29ABE2]/50
          text-[#29ABE2] text-xs font-semibold tracking-widest uppercase bg-[#29ABE2]/10">
          Our Locations
        </span>
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Find <span className="text-[#29ABE2]">Us</span>
        </h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
          Visit us at our works or corporate office. We're always happy to meet
          clients and discuss requirements in person.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">

        {/* ── Address Cards Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Works Address ── */}
          <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-8
            hover:border-[#29ABE2]/40 transition-all duration-300
            hover:shadow-xl hover:shadow-[#29ABE2]/10">

            {/* Tag */}
            <div className="flex items-center gap-2 mb-5">
              <div className="p-2 rounded-lg bg-[#29ABE2]/10 border border-[#29ABE2]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#29ABE2]"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-[#29ABE2] text-xs font-bold tracking-widest uppercase">
                Works
              </span>
            </div>

            <h2
              className="text-2xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              Ghaziabad, U.P.
            </h2>

            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#29ABE2] mt-0.5 shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-300 text-sm leading-relaxed">
                A-7/44, South Side, G.T. Road,<br />
                Industrial Area, Ghaziabad,<br />
                U.P. (INDIA)
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-5" />

            {/* Phone */}
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#29ABE2] mt-0.5 shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <a href="tel:+911204163255"
                  className="block text-gray-300 text-sm hover:text-[#29ABE2] transition-colors duration-200">
                  +91-120 4163255
                </a>
                <a href="tel:+911204127791"
                  className="block text-gray-300 text-sm hover:text-[#29ABE2] transition-colors duration-200 mt-1">
                  +91-120 4127791
                </a>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=28.641567964254143,77.43282798297047"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md
                border border-[#29ABE2] text-[#29ABE2] text-sm font-semibold
                hover:bg-[#29ABE2] hover:text-white transition-all duration-200 active:scale-95"
                
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* ── Corporate Office ── */}
          <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-8
            hover:border-[#29ABE2]/40 transition-all duration-300
            hover:shadow-xl hover:shadow-[#29ABE2]/10">

            {/* Tag */}
            <div className="flex items-center gap-2 mb-5">
              <div className="p-2 rounded-lg bg-[#29ABE2]/10 border border-[#29ABE2]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#29ABE2]"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-[#29ABE2] text-xs font-bold tracking-widest uppercase">
                Corporate Office
              </span>
            </div>

            <h2
              className="text-2xl font-extrabold text-white mb-4"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              New Delhi
            </h2>

            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#29ABE2] mt-0.5 shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-300 text-sm leading-relaxed">
                C-9/9282, Vasant Kunj,<br />
                New Delhi - 110070<br />
                (INDIA)
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-5" />

            {/* Phone + Email */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#29ABE2] mt-0.5 shrink-0"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:+911146023985"
                    className="block text-gray-300 text-sm hover:text-[#29ABE2] transition-colors duration-200">
                    +91-11-46023985
                  </a>
                  <a href="tel:+919312040815"
                    className="block text-gray-300 text-sm hover:text-[#29ABE2] transition-colors duration-200 mt-1">
                    +91-9312040815
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#29ABE2] shrink-0"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@durgarefractories.com"
                  className="text-gray-300 text-sm hover:text-[#29ABE2] transition-colors duration-200">
                  info@durgarefractories.com
                </a>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=C-9/9282,+Vasant+Kunj,+New+Delhi+110070+India"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md
                border border-[#29ABE2] text-[#29ABE2] text-sm font-semibold
                hover:bg-[#29ABE2] hover:text-white transition-all duration-200 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>

        {/* ── Google Map Embed ── */}
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[2px] w-10 bg-[#29ABE2] rounded-full" />
              <span className="text-[#29ABE2] text-xs font-semibold tracking-widest uppercase">
                Works Location
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl font-extrabold text-white"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              Find Us on the Map
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              A-7/44, South Side, G.T. Road, Industrial Area, Ghaziabad, U.P.
            </p>
          </div>

          {/* Map Container */}
          <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-white/10
            shadow-2xl shadow-black/40">
            <iframe
              title="Durga Ceramics Works Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.425857246366!2d77.4137741871582!3d28.6415545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef89495274eb%3A0x728cdc30fe5fc4ab!2sDurga%20Ceramics%20%26%20Refractories!5e0!3m2!1sen!2sin!4v1772097781513!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Map note */}
          <p className="text-gray-500 text-xs text-center">
            💡 The map is styled to match our dark theme. Click "Get Directions" above to open in Google Maps.
          </p>
        </div>

      </div>
    </div>
  );
}