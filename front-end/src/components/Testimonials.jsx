import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonialsData = [
    {
      name: "Rahul Sharma",
      text: "Prashant Telecom arranged our Maldives trip flawlessly. 5-star service all the way!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      text: "The customized family package to Kerala was affordable yet highly premium. Highly recommended.",
      rating: 5,
    },
    {
      name: "Amit Singh",
      text: "Quick flight and hotel bookings. Praphull is incredibly helpful and professional.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 px-5 md:px-10 bg-[#D6ECFF] ">
      <div className="container mx-auto md:px-4 max-w-[1300px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#041D29] mb-16">
          What Our Travelers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonialsData.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 bg-[#F8FBFD] rounded-2xl border border-[#EDF4F7] shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <div className="flex text-[#FF7A1A] mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#05B7D8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {test.name.charAt(0)}
                </div>
                <h4 className="font-bold text-[#062B3D]">{test.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
