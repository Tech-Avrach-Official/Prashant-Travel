import { categories } from "../data/categories";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DestinationCategoriesSlider() {
  return (
    <section
      className="
      py-18
      bg-white
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
            Discover Your Journey
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#062B3D]
            "
          >
            What Is Your Travel Style?
          </h2>

          <p
            className="
            mt-4
            text-gray-500
            text-lg
            max-w-2xl
            "
          >
            Choose from a variety of travel experiences
            crafted for every kind of explorer.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="
              group
              rounded-3xl
              overflow-hidden
              relative
              cursor-pointer
              shadow-lg
              "
            >
              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  h-[420px]
                  w-full
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                  "
                />

              </div>

              {/* Overlay */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent
                "
              />

              {/* Content */}

              <div
                className="
                absolute
                bottom-0
                left-0
                right-0
                p-6
                "
              >
                <h3
                  className="
                  text-white
                  text-2xl
                  font-bold
                  mb-2
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                  flex
                  justify-between
                  items-center
                  "
                >
                  <p className="text-white/80">
                    {item.tours} Tours
                  </p>

                  <Link
                    to="/contact"
                     className="
                   text-cyan-300
                     font-semibold
                   hover:text-[#FF7A1A]
                     transition-colors
                    duration-300
                     "
                    >
                   Know More →
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