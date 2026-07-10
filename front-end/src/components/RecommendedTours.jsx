import { tours } from "../data/tours";
import { motion } from "framer-motion";
import {
  Clock3,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function RecommendedTours() {
  return (
    <section
      className="
      py-18
      bg-[#F8FAFC]
      "
    >
      <div
        className="
        max-w-[1500px]
        mx-auto
        px-6
        md:px-10
        lg:px-14
        xl:px-16
        "
      >
        {/* Heading */}

        <div className="mb-16">

          <p
            className="
            uppercase
            tracking-[5px]
            text-cyan-600
            font-medium
            mb-3
            "
          >
            Handpicked Experiences
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#062B3D]
            "
          >
            Recommended Tours
          </h2>

          <p
            className="
            mt-4
            text-gray-500
            text-lg
            max-w-2xl
            "
          >
            Explore our most popular destinations,
            carefully selected for unforgettable journeys.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-8
          "
        >
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              group
              "
            >
              {/* Image */}

              <div className="overflow-hidden relative">

                <img
                  src={tour.image}
                  alt={tour.title}
                  className="
                  w-full
                  h-[260px]
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                  "
                />

                {/* Price Badge */}

                <div
                  className="
                  absolute
                  top-4
                  right-4
                  bg-[#FF7A1A]
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                  "
                >
                  ₹{tour.price}
                </div>

              </div>

              {/* Content */}

              <div className="p-6">

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-[#062B3D]
                  mb-4
                  "
                >
                  {tour.title}
                </h3>

                {/* Location */}

                 { /* <div
                  className="
                  flex
                  items-center
                  gap-2
                  text-gray-500
                  mb-4
                  "
                >
                  <MapPin size={16} />
                  {tour.location}
                </div> */}

                {/* Footer */}

                <div
                  className="
                  flex
                  justify-between
                  items-center
                  pt-4
                  border-t
                  border-gray-200
                  "
                >
                  <div
                    className="
                    flex
                    items-center
                    gap-2
                    text-gray-500
                    "
                  >
                    <Clock3 size={16} />
                    {tour.duration}
                  </div>

                  <Link
                    to="/contact"
                    className="
                    flex
                    items-center
                    gap-2
                    text-cyan-600
                    font-semibold
                    hover:text-cyan-800
                    transition
                    "
                  >
                    Details
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}