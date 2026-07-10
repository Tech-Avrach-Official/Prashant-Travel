import { motion } from "framer-motion";
import { Plane, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import dubai from "../assets/dubai.jpg";
import goa from "../assets/goa.jpg";
import bali from "../assets/bali.jpg";
import kashmir from "../assets/kashmir.jpg";
import ladakh from "../assets/ladakh.jpg";
import rishikesh from "../assets/rishikesh.jpg";

export default function PopularFlightRoutes() {
  const routes = [
    {
      id: 1,
      route: "Delhi → Dubai",
      price: "₹18,999",
      image: dubai,
    },
    {
      id: 2,
      route: "Mumbai → Goa",
      price: "₹4,499",
      image: goa,
    },
    {
      id: 3,
      route: "Delhi → Bali",
      price: "₹29,999",
      image: bali,
    },
    {
      id: 4,
      route: "Bangalore → Kashmir",
      price: "₹12,999",
      image: kashmir,
    },
    {
      id: 5,
      route: "Delhi → Ladakh",
      price: "₹10,999",
      image: ladakh,
    },
    {
      id: 6,
      route: "Mumbai → Rishikesh",
      price: "₹8,499",
      image: rishikesh,
    },
    {
      id: 7,
      route: "Chennai → Dubai",
      price: "₹19,499",
      image: dubai,
    },
    {
      id: 8,
      route: "Kolkata → Bali",
      price: "₹31,999",
      image: bali,
    },
  ];

  return (
    <section className="py-12 bg-[#F8F9FA]">
      <div className="max-w-362.5 mx-auto px-6 md:px-10 lg:px-14">
        {/* Heading */}

        <div className="flex items-center gap-3 mb-14">
          <div className="w-12 h-12 rounded-full bg-[#062B3D]/10 flex items-center justify-center">
            <Plane className="text-[#062B3D]" size={24} />
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-cyan-600 text-sm">
              Popular Routes
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#062B3D]">
              Top Flight Routes
            </h2>
          </div>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
              group
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={route.image}
                  alt={route.route}
                  className="
                  w-full
                  h-56
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                  "
                />

                {/* Plane Icon */}

                <div
                  className="
                  absolute
                  top-4
                  right-4
                  bg-white/90
                  backdrop-blur-sm
                  rounded-full
                  p-2
                  "
                >
                  <Plane size={18} className="text-[#062B3D]" />
                </div>

                {/* Hover Overlay */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-black/50
                  flex
                  items-center
                  justify-center
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  "
                >
                  <Link
  to="/contact"
  className="
  bg-[#FF7A1A]
  text-white
  px-5
  py-3
  rounded-full
  font-semibold
  flex
  items-center
  gap-2
  hover:bg-[#E96B13]
  transition-all
  duration-300
  "
>
  View Flight
  <ArrowRight size={16} />
</Link>
                </div>
              </div>

              {/* Content */}

              <div className="p-5">
                <h3
                  className="
                  text-2xl
                  font-bold
                  text-[#062B3D]
                  mb-3
                  "
                >
                  {route.route}
                </h3>

                <p
                  className="
                  text-[#FF7A1A]
                  font-semibold
                  text-lg
                  "
                >
                  Fares From {route.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
