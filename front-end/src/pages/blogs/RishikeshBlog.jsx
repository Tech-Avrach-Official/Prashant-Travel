import React from "react";
import { motion } from "framer-motion";
import {
MapPin,
Calendar,
Clock,
ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import banner from "../../assets/rishikesh-banner.jpg";

import laxmanJhula from "../../assets/laxman-jhula.jpg";
import ramJhula from "../../assets/ram-jhula.jpg";
import triveniGhat from "../../assets/triveni-ghat.jpg";
import beatlesAshram from "../../assets/beatles-ashram.jpg";

export default function RishikeshBlog() {

const places = [
{
title: "Laxman Jhula",
image: laxmanJhula,
desc: "The iconic suspension bridge offering breathtaking views of the holy Ganga River.",
},

{
  title: "Ram Jhula",
  image: ramJhula,
  desc: "One of the most visited landmarks connecting temples, ashrams and local markets.",
},

{
  title: "Triveni Ghat",
  image: triveniGhat,
  desc: "Experience the mesmerizing Ganga Aarti and spiritual atmosphere every evening.",
},

{
  title: "Beatles Ashram",
  image: beatlesAshram,
  desc: "A peaceful retreat famous for meditation, spirituality and artistic graffiti walls.",
},

];

return ( <div className="bg-white">


  {/* HERO */}

  <section className="relative py-30 overflow-hidden">

    <img
      src={banner}
      alt="Rishikesh"
      className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      "
    />

    <div className="absolute inset-0 bg-black/55" />

    <div
      className="
      relative
      z-10
      h-full
      flex
      items-center
      "
    >
      <div
        className="
        max-w-[1450px]
        mx-auto
        px-6
        md:px-10
        lg:px-14
        xl:px-16
        w-full
        "
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          uppercase
          tracking-[5px]
          text-cyan-300
          mb-4
          "
        >
          Spiritual & Adventure Guide
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          text-white
          text-5xl
          md:text-7xl
          font-bold
          max-w-4xl
          "
        >
          Weekend Escape
          <br />
          To Rishikesh
        </motion.h1>

        <div
          className="
          flex
          flex-wrap
          gap-6
          mt-8
          text-white/90
          "
        >
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            Rishikesh, Uttarakhand
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            June 2026
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            8 Min Read
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* INTRO */}

  <section className="py-18">
    <div className="max-w-5xl mx-auto px-6">

      <h2 className="text-5xl font-bold text-[#062B3D] mb-8">
        The Yoga Capital Of The World
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Nestled in the foothills of the Himalayas and located on the
        banks of the sacred Ganga River, Rishikesh is one of India's
        most popular destinations for spirituality, wellness and adventure.
      </p>

      <p className="text-lg text-gray-600 leading-relaxed">
        From yoga retreats and meditation centers to river rafting,
        camping and bungee jumping, Rishikesh offers the perfect
        combination of peace and excitement.
      </p>

    </div>
  </section>

  {/* TOP PLACES */}

  <section className="py-18 bg-slate-50">

    <div
      className="
      max-w-[1450px]
      mx-auto
      px-6
      md:px-10
      lg:px-14
      xl:px-16
      "
    >
      <h2
        className="
        text-5xl
        font-bold
        text-center
        text-[#062B3D]
        mb-16
        "
      >
        Must Visit Places
      </h2>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-8
        "
      >
        {places.map((place, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-lg
            "
          >
            <img
              src={place.image}
              alt={place.title}
              className="
              w-full
              h-[280px]
              object-cover
              "
            />

            <div className="p-6">

              <h3
                className="
                text-2xl
                font-bold
                text-[#062B3D]
                mb-3
                "
              >
                {place.title}
              </h3>

              <p className="text-gray-600">
                {place.desc}
              </p>

            </div>
          </motion.div>
        ))}
      </div>
    </div>

  </section>

  {/* TRAVEL TIPS */}


<section className="py-18 bg-[#F4F9FC]">

  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-16">

      <span
        className="
        uppercase
        tracking-[5px]
        text-cyan-600
        font-medium
        "
      >
        Smart Travel Guide
      </span>

      <h2
        className="
        text-4xl
        md:text-6xl
        font-bold
        text-[#062B3D]
        mt-4
        "
      >
        Essential Travel Tips
      </h2>

      <p
        className="
        text-gray-600
        text-lg
        max-w-2xl
        mx-auto
        mt-4
        "
      >
        Make your Rishikesh getaway more enjoyable and stress-free
        with these expert travel recommendations.
      </p>

    </div>

    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-8
      "
    >

      {[
        "Best time to visit: September to April",
        "Book rafting and camping activities in advance",
        "Carry comfortable trekking shoes",
        "Attend the evening Ganga Aarti at Triveni Ghat",
        "Try local cafés and riverside dining experiences",
        "Carry light woolens for cool evenings near the river",
      ].map((tip, index) => (

        <div
          key={index}
          className="
          bg-white
          rounded-3xl
          p-6
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          border
          border-slate-100
          "
        >

          <div className="flex items-start gap-4">

            <div
              className="
              w-12
              h-12
              rounded-full
              bg-cyan-100
              flex
              items-center
              justify-center
              text-cyan-700
              font-bold
              shrink-0
              "
            >
              ✓
            </div>

            <p
              className="
              text-gray-700
              text-lg
              leading-relaxed
              "
            >
              {tip}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

  {/* CTA */}

<section className="py-18 bg-white">

  <div className="max-w-6xl mx-auto px-6">

    <div
      className="
      relative
      overflow-hidden
      rounded-[32px]
      bg-gradient-to-r
      from-[#0A3D55]
      via-[#0F5675]
      to-[#0A3D55]
      p-12
      md:p-16
      text-center
      shadow-[0_20px_60px_rgba(0,0,0,0.15)]
      "
    >

      {/* Decorative Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />

      <div className="relative z-10">

        <span
          className="
          uppercase
          tracking-[5px]
          text-cyan-300
          text-sm
          font-medium
          "
        >
          Spiritual & Adventure Escape
        </span>

        <h2
          className="
          text-white
          text-4xl
          md:text-6xl
          font-bold
          mt-4
          mb-6
          "
        >
          Ready To Explore Rishikesh?
        </h2>

        <p
          className="
          text-white/80
          text-lg
          md:text-xl
          max-w-3xl
          mx-auto
          mb-10
          leading-relaxed
          "
        >
          Let Prashant Tours & Travels plan your perfect Rishikesh getaway
          with river rafting adventures, yoga retreats, spiritual experiences,
          riverside camping and unforgettable Himalayan views.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <Link
            to="/contact"
            className="
            inline-flex
            items-center
            justify-center
            gap-2
            bg-[#FF7A1A]
            px-8
            py-4
            rounded-full
            text-white
            font-semibold
            hover:bg-[#E96B13]
            hover:-translate-y-1
            transition-all
            duration-300
            shadow-lg
            "
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/destination"
            className="
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            rounded-full
            border
            border-white/20
            text-white
            font-semibold
            hover:bg-white/10
            transition-all
            duration-300
            "
          >
            Explore Destinations
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>
</div>

);
}
