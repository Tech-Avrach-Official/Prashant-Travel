import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const highlights = [
    { title: "Trusted Service", value: "10K+ Happy Customers" },
    { title: "Global Reach", value: "50+ Destinations" },
    { title: "Custom Packages", value: "100% Personalized" },
    { title: "Affordability", value: "Best Price Guarantee" },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className=" mx-auto px-5 md:px-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-150"
          >
            <img
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Travel"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold text-[#062B3D] mb-2">
                15+ Years of Excellence
              </h3>
              <p className="text-gray-600">
                Creating unforgettable memories since inception.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#062B3D] mb-6">
              Discover the World with Premium Comfort
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              At Prashant Telecom, managed by Praphull Rajak, we believe travel
              should be seamless, luxurious, and accessible. Based in Jabalpur,
              we offer end-to-end travel management designed specifically for
              your comfort and budget.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow-sm border border-[#EDF4F7] hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="text-[#05B7D8] mb-4" size={32} />
                  <h4 className="text-xl font-bold text-[#062B3D] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
