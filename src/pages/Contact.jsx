import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";

const productOptions = [
  "Ferro Molybdenum",
  "Ferro Vanadium",
  "Ferro Titanium",
  "Ferro Aluminium",
  "Ferro Silicon Calcium",
  "Silicon Mangnesium (Inoculants/Nodulizers)",
  "Zircon Sand",
  "Zircon Flour",
  "Chromite Sand",
  "Olivine Sand",
  "Sillimanite Sand",
  "Perlite Slax-30",
  "Nickel Ingots",
  "Copper Ingots",
  "Tin Ingots",
  "Calcined Petroleum Coke",
  "Graphite Granules",
  "Carbon Raisers",
  "High Alumina Bricks",
  "High Alumina Castables",
  "Graphite StopperHeads",
  "Ladle Sleeves",
  "Collector Nozzles",
  "Tungsten Metal",
  "Selenium Granules",
  "LC Ferro Chrome",
  "Silicon Metal",
  "Chromium Metal",
  "Other / Not Listed",
];

const initialForm = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  product: "",
  requirements: "",
  quantity: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.companyName.trim()) newErrors.companyName = "Company name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.requirements.trim()) newErrors.requirements = "Please describe your requirements.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const templateParams = {
      fullName: form.fullName,
      companyName: form.companyName,
      email: form.email,
      phone: form.phone,
      product: form.product,
      quantity: form.quantity,
      requirements: form.requirements,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        templateParams,
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(
        () => {
          setSubmitted(true);
          setForm(initialForm);
          setErrors({});
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <Navbar />

      {/* ── Page Header ── */}
      <div className="pt-32 pb-12 px-6 text-center border-b border-white/10">
        <span className="inline-block mb-4 px-4 py-1 rounded-full border border-[#29ABE2]/50
          text-[#29ABE2] text-xs font-semibold tracking-widest uppercase bg-[#29ABE2]/10">
          Get In Touch
        </span>
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Contact <span className="text-[#29ABE2]">Us</span>
        </h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
          Have a requirement or need a quote? Fill in the form below and our team
          will get back to you at the earliest.
        </p>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* ── LEFT: Contact Info Cards ── */}
        <div className="flex flex-col gap-6">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-\[2px\] w-10 bg-[#29ABE2] rounded-full" />
              <span className="text-[#29ABE2] text-xs font-semibold tracking-widest uppercase">
                Reach Us
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              We'd Love to Hear From You
            </h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Whether you have a bulk requirement, need technical specifications or
              want to explore a long-term supply partnership — we're here to help.
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-[#1E293B] border border-white/10 rounded-xl p-5
            hover:border-[#29ABE2]/40 transition-all duration-200">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#29ABE2]/10 border border-[#29ABE2]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#29ABE2]"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">
                  Email Us
                </p>
                <a
                  href="mailto:info@durgarefractories.com"
                  className="text-white text-sm font-medium hover:text-[#29ABE2] transition-colors"
                >
                  info@durgarefractories.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-[#1E293B] border border-white/10 rounded-xl p-5
            hover:border-[#29ABE2]/40 transition-all duration-200">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#29ABE2]/10 border border-[#29ABE2]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#29ABE2]"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">
                  Call Us
                </p>
                <a
                  href="tel:+911204163255"
                  className="block text-white text-sm font-medium hover:text-[#29ABE2] transition-colors"
                >
                  +91-120 4163255
                </a>
                <a
                  href="tel:+911204127791"
                  className="block text-white text-sm font-medium hover:text-[#29ABE2] transition-colors mt-0.5"
                >
                  +91-120 4127791
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="bg-[#1E293B] border border-white/10 rounded-xl p-5
            hover:border-[#29ABE2]/40 transition-all duration-200">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#29ABE2]/10 border border-[#29ABE2]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#29ABE2]"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">
                  Business Hours
                </p>
                <p className="text-white text-sm font-medium">Mon – Sat: 10:00 AM – 6:00 PM</p>
                <p className="text-gray-400 text-xs mt-0.5">Sunday: Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* ── RIGHT: Contact Form (spans 2 cols) ── */}
        <div className="lg:col-span-2">
          <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-8">

            {submitted ? (
              /* ── Success Message ── */
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-5">
                <div className="p-4 rounded-full bg-[#29ABE2]/10 border border-[#29ABE2]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#29ABE2]"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-extrabold text-white"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  Enquiry Submitted!
                </h3>
                <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. Our team will review your requirement
                  and get back to you within 1–2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-6 py-2.5 rounded-md border border-[#29ABE2] text-[#29ABE2]
                    text-sm font-semibold hover:bg-[#29ABE2] hover:text-white
                    transition-all duration-200"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  Send Us Your Requirement
                </h3>

                {/* Row 1 — Full Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                      Full Name <span className="text-[#29ABE2]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`bg-[#0D1B2A] border rounded-lg px-4 py-3 text-white text-sm
                        placeholder-gray-600 outline-none transition-all duration-200
                        focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2]/30
                        ${errors.fullName ? "border-red-500" : "border-white/10"}`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                      Company Name <span className="text-[#29ABE2]">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className={`bg-[#0D1B2A] border rounded-lg px-4 py-3 text-white text-sm
                        placeholder-gray-600 outline-none transition-all duration-200
                        focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2]/30
                        ${errors.companyName ? "border-red-500" : "border-white/10"}`}
                    />
                    {errors.companyName && (
                      <p className="text-red-400 text-xs">{errors.companyName}</p>
                    )}
                  </div>
                </div>

                {/* Row 2 — Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                      Email Address <span className="text-[#29ABE2]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`bg-[#0D1B2A] border rounded-lg px-4 py-3 text-white text-sm
                        placeholder-gray-600 outline-none transition-all duration-200
                        focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2]/30
                        ${errors.email ? "border-red-500" : "border-white/10"}`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs">{errors.email}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                      Phone Number <span className="text-[#29ABE2]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`bg-[#0D1B2A] border rounded-lg px-4 py-3 text-white text-sm
                        placeholder-gray-600 outline-none transition-all duration-200
                        focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2]/30
                        ${errors.phone ? "border-red-500" : "border-white/10"}`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Row 3 — Product Dropdown + Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                      Product Interested In
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="bg-[#0D1B2A] border border-white/10 rounded-lg px-4 py-3
                        text-sm outline-none transition-all duration-200
                        focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2]/30
                        text-gray-300 cursor-pointer"
                    >
                      <option value="" className="text-gray-600">Select a product...</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-white bg-[#1E293B]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                      Quantity Required{" "}
                      <span className="text-gray-600 normal-case font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 5 MT, 500 kg"
                      className="bg-[#0D1B2A] border border-white/10 rounded-lg px-4 py-3
                        text-white text-sm placeholder-gray-600 outline-none
                        transition-all duration-200 focus:border-[#29ABE2]
                        focus:ring-1 focus:ring-[#29ABE2]/30"
                    />
                  </div>
                </div>

                {/* Row 4 — Requirements Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                    Requirement Details <span className="text-[#29ABE2]">*</span>
                  </label>
                  <textarea
                    name="requirements"
                    value={form.requirements}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Please describe your requirement, grade, specifications or any other details..."
                    className={`bg-[#0D1B2A] border rounded-lg px-4 py-3 text-white text-sm
                      placeholder-gray-600 outline-none transition-all duration-200 resize-none
                      focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2]/30
                      ${errors.requirements ? "border-red-500" : "border-white/10"}`}
                  />
                  {errors.requirements && (
                    <p className="text-red-400 text-xs">{errors.requirements}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#29ABE2] hover:bg-[#1a90c8]
                    text-white font-bold text-sm tracking-wide transition-all duration-200
                    shadow-lg hover:shadow-[#29ABE2]/30 hover:shadow-xl active:scale-95
                    flex items-center justify-center gap-2"
                >
                  Submit Enquiry
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>

                <p className="text-gray-600 text-xs text-center">
                  Fields marked with <span className="text-[#29ABE2]">*</span> are required.
                  We typically respond within 1–2 business days.
                </p>

              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}