import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import destinationbanner from "../assets/destinationbanner.jpg";

export default function DestinationHero() {
  return (
    <section
      className="
      relative
      h-[75vh]
      min-h-[650px]
      overflow-hidden
      "
    >
      {/* Background Image */}

      <img
        src={destinationbanner}
        alt="Destination Banner"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        object-center
        "
      />

      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/70
        via-black/45
        to-black/30
        "
      />

      {/* Content */}

      <div
        className="
        relative
        z-10
        h-full
        max-w-[1500px]
        mx-auto
        px-6
        md:px-10
        lg:px-14
        xl:px-16
        flex
        items-center
        "
      >
        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
            uppercase
            tracking-[6px]
            text-cyan-300
            font-medium
            mb-5
            "
          >
            Discover The World
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
            text-white
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-extrabold
            leading-[0.95]
            "
          >
            Explore Dream
            <br />
            Destinations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
            mt-8
            text-white/90
            text-lg
            md:text-xl
            max-w-2xl
            leading-relaxed
            "
          >
            Discover breathtaking destinations, luxury escapes,
            adventure tours and unforgettable travel experiences
            with Prashant Telecom Travel Services.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="
            mt-10
            flex
            flex-wrap
            gap-4
            "
          >
            {/* <button
              className="
              px-8
              py-4
              rounded-full
              bg-[#FF7A1A]
              text-white
              font-semibold
              hover:bg-[#E76A12]
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >
              Explore Tours
            </button> */}

            <Link
  to="/contact"
  className="
  px-8
  py-4
  rounded-full
  border
  border-white/30
  backdrop-blur-md
  text-white
  font-semibold
  hover:bg-white
  hover:text-[#062B3D]
  transition-all
  duration-300
  inline-flex
  items-center
  justify-center
  "
>
  Contact Us
</Link>
          </motion.div>

        </div>
      </div>

      {/* Bottom Fade */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-32
        bg-gradient-to-t
        from-white
        to-transparent
        "
      />
    </section>
  );
}