import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

// 👇 Apna Google Apps Script Web App URL yahan paste karo
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw8A6owyrvPDVpEqiQMac3EzHhTK-WXOG65kur4cEZXZ9ZWig3N_a_Tg1Ex06PxRoDl/exec";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    destination: "",
    service: "",
    travelDate: "",
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
        destination: "",
        service: "",
        travelDate: "",
        message: "",
      });

      // 4 second baad success message hata do
      setTimeout(() => setStatus(""), 4000);
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 min-h-screen bg-gradient-to-b from-white via-[#F7FBFD] to-[#EDF5F8]">
      <div className="mx-auto px-4 max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#062B3D] mb-3 md:mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            We are here to assist you with all your travel needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 px-0 sm:px-4">
          {[
            {
              icon: <Phone size={28} />,
              title: "Call Us",
              detail: "+91 92851 17911",
              action: "tel:+919285117911",
            },
            {
              icon: <Mail size={28} />,
              title: "Email Us",
              detail: "praphullrajak1988@gmail.com",
              action: "mailto:praphullrajak1988@gmail.com",
            },
            {
              icon: <MapPin size={28} />,
              title: "Visit Us",
              detail: "Near Imperilla Hotel, Napier Town, Jabalpur",
              action: "#",
            },
          ].map((item, idx) => (
            <motion.a
              href={item.action}
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="
                bg-white
                p-6 sm:p-8
                rounded-2xl sm:rounded-3xl
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                border
                border-gray-100
                flex
                flex-col
                items-center
                text-center
                hover:-translate-y-2 md:hover:-translate-y-3
                hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                transition-all
                duration-500
                group
                break-words
              "
            >
              <div
                className="
                  w-16 h-16
                  md:w-20 md:h-20
                  bg-[#062B3D]
                  text-[#18D8FF]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  mb-5 md:mb-6
                  group-hover:scale-110
                  transition-all
                  duration-500
                "
              >
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#062B3D] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base break-all">{item.detail}</p>
            </motion.a>
          ))}
        </div>

        {/* Inquiry */}
        <div className="pt-14 md:pt-18">
          <div className="max-w-[1300px] mx-auto px-0 sm:px-6 md:px-10">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10 md:mb-16 mt-14 md:mt-20"
            >
              <span
                className="
                  inline-block
                  px-4 sm:px-5
                  py-1.5 sm:py-2
                  rounded-full
                  bg-cyan-100
                  text-cyan-700
                  font-semibold
                  text-xs sm:text-sm
                  tracking-wider
                  uppercase
                "
              >
                Travel Planning
              </span>

              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-6xl
                  font-bold
                  text-[#062B3D]
                  mt-4 md:mt-5
                "
              >
                Travel Enquiry
              </h1>

              <p
                className="
                  text-gray-600
                  text-base md:text-lg
                  mt-4 md:mt-5
                  max-w-3xl
                  mx-auto
                  leading-relaxed
                  px-2
                "
              >
                Fill out the details below and our travel experts
                will contact you with the best travel packages
                tailored to your requirements.
              </p>
            </motion.div>

            {/* Map + Form Section */}
            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-6 md:gap-10
                items-stretch
                bg-white/70
                backdrop-blur-sm
                rounded-[24px] md:rounded-[40px]
                p-4 sm:p-8 md:p-10
                shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                border
                border-white
              "
            >
              {/* MAP */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="
                  overflow-hidden
                  rounded-[20px] md:rounded-[32px]
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  border
                  border-gray-100
                  bg-white
                  flex
                  flex-col
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-500
                "
              >
                <div className="p-5 md:p-6 border-b border-gray-100">
                  <h3 className="text-xl md:text-2xl font-bold text-[#062B3D] mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Near Imperilla Hotel, Napier Town, Jabalpur
                  </p>
                </div>

                <iframe
                  title="Prashant Tours & Travels Location"
                  src="https://www.google.com/maps?q=Napier+Town+Jabalpur&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[550px]"
                />
              </motion.div>

              {/* FORM */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="
                    bg-white
                    rounded-[20px] md:rounded-[32px]
                    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                    border
                    border-gray-100
                    p-5 sm:p-8 md:p-12
                    h-full
                  "
                >
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
                    <div>
                      <label className="block mb-2 font-semibold text-[#062B3D] text-sm md:text-base">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full p-3.5 md:p-4 rounded-xl border border-gray-200 bg-[#F8FBFD] text-sm md:text-base focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-[#062B3D] text-sm md:text-base">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full p-3.5 md:p-4 rounded-xl border border-gray-200 bg-[#F8FBFD] text-sm md:text-base focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="mb-5 md:mb-6">
                    <label className="block mb-2 font-semibold text-[#062B3D] text-sm md:text-base">
                      Travel Destination
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Dubai, Bali, Kashmir..."
                      className="
                        w-full
                        h-[50px] md:h-[58px]
                        px-4
                        rounded-xl
                        border
                        border-gray-200
                        bg-[#F8FBFD]
                        text-sm md:text-base
                        focus:outline-none
                        focus:border-cyan-500
                      "
                    />
                  </div>

                  {/* Service Required */}
                  <div className="mb-5 md:mb-6">
                    <label className="block mb-2 font-semibold text-[#062B3D] text-sm md:text-base">
                      Service Required
                    </label>

                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="
                          w-full
                          h-[50px] md:h-[58px]
                          px-4
                          pr-10 md:pr-12
                          rounded-xl
                          border
                          border-gray-200
                          bg-[#F8FBFD]
                          text-[#062B3D]
                          text-sm md:text-base
                          appearance-none
                          focus:outline-none
                          focus:border-cyan-500
                        "
                      >
                        <option value="">Select Service</option>
                        <option>Tour Package</option>
                        <option>Flight Booking</option>
                        <option>Hotel Booking</option>
                        <option>Honeymoon Package</option>
                        <option>Corporate Travel</option>
                        <option>Custom Itinerary</option>
                      </select>

                      <svg
                        className="
                          absolute
                          right-3 md:right-4
                          top-1/2
                          -translate-y-1/2
                          w-4 h-4 md:w-5 md:h-5
                          text-gray-500
                          pointer-events-none
                        "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Travel Date */}
                  <div className="mb-5 md:mb-6">
                    <label className="block mb-2 font-semibold text-[#062B3D] text-sm md:text-base">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full p-3.5 md:p-4 rounded-xl border border-gray-200 bg-[#F8FBFD] text-sm md:text-base focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6 md:mb-8">
                    <label className="block mb-2 font-semibold text-[#062B3D] text-sm md:text-base">
                      Additional Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your travel plans..."
                      className="
                        w-full
                        p-3.5 md:p-4
                        rounded-xl
                        border
                        border-gray-200
                        bg-[#F8FBFD]
                        text-sm md:text-base
                        focus:outline-none
                        focus:border-cyan-500
                        resize-none
                      "
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="
                      w-full
                      py-4 md:py-5
                      rounded-xl
                      bg-[#FF7A1A]
                      text-white
                      font-bold
                      text-base md:text-lg
                      shadow-lg
                      hover:bg-[#E96B13]
                      hover:-translate-y-1
                      hover:shadow-xl
                      transition-all
                      duration-300
                      disabled:opacity-60
                      disabled:hover:translate-y-0
                    "
                  >
                    {status === "sending" ? "Sending..." : "Submit Travel Inquiry"}
                  </button>

                  {status === "success" && (
                    <p className="text-green-600 text-center font-medium mt-4 text-sm md:text-base">
                      ✅ Inquiry sent successfully! We'll contact you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 text-center font-medium mt-4 text-sm md:text-base">
                      ⚠️ Please fill required fields or try again.
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}