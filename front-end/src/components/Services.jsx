import React from "react";
import { motion } from "framer-motion";
import Flight from "../assets/flight.jpg";
import TrainImg from "../assets/train.jpg";
import Honey from "../assets/honey.jpg";
import Family from "../assets/family.jpg";
import Business from "../assets/business.jpg";
import Custom from "../assets/custom.jpg";
import { Plane, Train, Heart, Users, Briefcase, Map } from "lucide-react";

export default function Services() {
  const servicesData = [
    {
      title: "Flight Booking",
      image: Flight,
      icon: <Plane />,
      desc: "Premium domestic & international flight reservations.",
    },

    {
      title: "Train Booking",
      image: TrainImg,
      icon: <Train />,
      desc: "Hassle-free railway ticket booking assistance.",
    },

    {
      title: "Honeymoon Packages",
      image: Honey,
      icon: <Heart />,
      desc: "Romantic getaways tailored for couples.",
    },

    {
      title: "Family Vacations",
      image: Family,
      icon: <Users />,
      desc: "Unforgettable trips for the whole family.",
    },

    {
      title: "Business Travel",
      image: Business,
      icon: <Briefcase />,
      desc: "Corporate travel arrangements & management.",
    },

    {
      title: "Customized Tours",
      image: Custom,
      icon: <Map />,
      desc: "Bespoke itineraries designed just for you.",
    },
  ];

  return (
    <section className="py-12 md:px-10 bg-[#D6ECFF] relative">
      <div className=" mx-auto px-4 max-w-325 relative z-10">
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#041D29] mb-4"
          >
            Our Premium Services
          </motion.h2>
          <p className="text-[#041D29] text-lg">
            Comprehensive travel solutions tailored for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6">
          {servicesData.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="
  overflow-hidden
  rounded-3xl
  bg-[#ffffff]
  backdrop-blur-md
  border
  border-white/60
  hover:border-cyan-400/50
  hover:-translate-y-3
  transition-all
  duration-500
  group
  shadow-xl
  "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="
      w-full
      h-full
      object-cover
      group-hover:scale-110
      transition-all
      duration-700
      "
                />

                {/* Overlay */}
                <div
                  className="
      absolute
      inset-0
      bg-gradient-to-t
      from-[#062B3D]
      via-transparent
      to-transparent
      "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div
                  className="
      w-12
      h-12
      rounded-full
      bg-cyan-500/10
      text-slate-800
      flex
      items-center
      justify-center
      mb-4
      "
                >
                  {srv.icon}
                </div>

                <h3
                  className="
      text-xl
      font-bold
      text-slate-800
      mb-3
      "
                >
                  {srv.title}
                </h3>

                <p
                  className="
      text-slate-600
      leading-relaxed
      mb-5
      text-sm
      "
                >
                  {srv.desc}
                </p>

                {/* 
    <button
      className="
      text-cyan-400
      font-semibold
      hover:text-cyan-300
      transition
      "
    >
      Learn More →
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
