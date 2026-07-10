import React from 'react'
import { motion } from "framer-motion";
import { Phone, PhoneCall } from "lucide-react";
import contactBookingImg from "../assets/contact-img.png";

const BookingContact = () => {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24 bg-[#f7f9fc]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* ===== Left: Text Content ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <span className="inline-block text-[#008cff] font-semibold tracking-wide uppercase text-sm mb-3">
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-6xl font-extrabold text-[#0a2540] leading-tight mb-5">
            Ready to Book Your <br className="hidden md:block" />
            Next Trip?
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0">
            Confirm your booking directly with our travel expert. Quick response,
            best deals, and a smooth hassle-free experience — just a call away.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 bg-[#0a2540] hover:bg-[#0a2540]/90 transition-colors text-white px-7 py-3.5 rounded-full text-base md:text-lg font-semibold"
            >
              <Phone size={18} fill="white" />
              +91 98765 43210
            </a>

          
          </div>
        </motion.div>

        {/* ===== Right: Image ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={contactBookingImg}
            alt="For Confirm Booking - Contact Mr Praphull"
            className="w-full h-auto rounded-2xl shadow-md object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default BookingContact;