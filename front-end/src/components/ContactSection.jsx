import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

// 👇 Same Google Apps Script Web App URL jo Contact.jsx me use ho raha hai
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw8A6owyrvPDVpEqiQMac3EzHhTK-WXOG65kur4cEZXZ9ZWig3N_a_Tg1Ex06PxRoDl/exec";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    travelDate: "",
    destination: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.mobileNumber) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFormData({
        fullName: "",
        mobileNumber: "",
        travelDate: "",
        destination: "",
        service: "",
        message: "",
      });

      setTimeout(() => setStatus(""), 4000);
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="py-10 md:py-16 px-4 md:px-10 bg-[#F8F9FA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1 h-full opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
          alt="Map Overlay"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto max-w-[1300px] relative z-10">
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8 md:gap-14
          bg-white
          rounded-[24px] md:rounded-[40px]
          p-5 sm:p-8 md:p-14
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          border
          border-gray-100
          "
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-800"
          >
            <h2
              className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-bold
              text-[#062B3D]
              mb-4 md:mb-6
              leading-tight
              "
            >
              Let's Plan Your
              <br />
              Dream Trip
            </h2>
            <p className="text-gray-600 mb-8 md:mb-14 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg">
              Connect with our travel experts and receive
              personalized tour packages, flight bookings,
              hotel reservations and complete travel assistance.
            </p>

            <div className="space-y-5 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-[#18D8FF] group-hover:bg-[#18D8FF] group-hover:text-[#062B3D] transition-colors border">
                  <Phone size={22} className="md:hidden" />
                  <Phone size={28} className="hidden md:block" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Call / WhatsApp</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold break-words">
                    +91 92851 17911
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-[#18D8FF] group-hover:bg-[#18D8FF] group-hover:text-[#062B3D] transition-colors border">
                  <Mail size={22} className="md:hidden" />
                  <Mail size={28} className="hidden md:block" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Email Address</p>
                  <p className="text-sm sm:text-lg md:text-xl font-bold break-all">
                    praphullrajak1988@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-[#18D8FF] group-hover:bg-[#18D8FF] group-hover:text-[#062B3D] transition-colors border">
                  <MapPin size={22} className="md:hidden" />
                  <MapPin size={28} className="hidden md:block" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Office Location</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold">
                    Near Imperilla Hotel, Shastri Bridge, Napier Town, Jabalpur,
                    MP – 482001
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="
              bg-[#FBFDFF]
              border
              border-gray-100
              p-5 sm:p-8 md:p-10
              rounded-[20px] md:rounded-[32px]
              flex
              flex-col
              gap-4 md:gap-6
              shadow-lg
              h-full
              "
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#062B3D] mb-2 md:mb-4">
                Request A Free Quote
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 p-3.5 md:p-4 rounded-lg text-sm md:text-base focus:outline-none focus:border-[#05B7D8] focus:ring-2 focus:ring-[#05B7D8]/20"
                />
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 p-3.5 md:p-4 rounded-lg text-sm md:text-base focus:outline-none focus:border-[#05B7D8] focus:ring-2 focus:ring-[#05B7D8]/20"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  placeholder="Travel Date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  className="
                    w-full
                    bg-white
                    border
                    border-gray-200
                    text-gray-700
                    p-3.5 md:p-4
                    rounded-xl
                    text-sm md:text-base
                    focus:outline-none
                    focus:border-[#05B7D8]
                    focus:ring-2
                    focus:ring-[#05B7D8]/20
                  "
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Travel Destination"
                  className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 p-3.5 md:p-4 rounded-lg text-sm md:text-base focus:outline-none focus:border-[#05B7D8] focus:ring-2 focus:ring-[#05B7D8]/20"
                />
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="
                      w-full
                      p-3.5 md:p-4
                      pr-10 md:pr-12
                      rounded-xl
                      border
                      border-gray-300
                      bg-white
                      text-gray-700
                      text-sm md:text-base
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#041D29]/20
                      focus:border-[#041D29]
                      appearance-none
                      cursor-pointer
                    "
                  >
                    <option value="">Service Required</option>
                    <option value="flight">Flight Booking</option>
                    <option value="tour">Tour Package</option>
                    <option value="hotel">Hotel Booking</option>
                  </select>

                  <svg
                    className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-500 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional Requirements"
                rows="4"
                className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 p-3.5 md:p-4 rounded-lg text-sm md:text-base focus:outline-none focus:border-[#05B7D8] focus:ring-2 focus:ring-[#05B7D8]/20"
              ></textarea>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 md:py-5 bg-[#FF7A1A] hover:bg-[#E96B13] text-white text-base md:text-lg font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "sending" ? "Sending..." : "Submit Inquiry"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center font-medium text-sm md:text-base">
                  ✅ Inquiry sent successfully! We'll contact you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center font-medium text-sm md:text-base">
                  ⚠️ Please fill required fields or try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}