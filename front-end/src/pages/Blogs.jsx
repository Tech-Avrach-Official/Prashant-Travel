import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Banner
import banner from "../assets/banner.jpg";

// Blog Images
import kashmir from "../assets/kashmir.jpg";
import dubai from "../assets/dubai.jpg";
import bali from "../assets/bali.jpg";
import goa from "../assets/goa.jpg";
import ladakh from "../assets/ladakh.jpg";
import rishikesh from "../assets/rishikesh.jpg";

// Mountain Section
//import mountain from "../assets/mountain.jpg";

export default function BlogSection() {
  const Blogs = [
    {
      id: 1,
      title: "Top 10 Places To Visit In Kashmir",
      location: "Kashmir, India",
      image: kashmir,
      rating: 4.9,
      link: "/blogs/kashmir"
    },

    {
      id: 2,
      title: "Luxury Weekend In Dubai",
      location: "Dubai, UAE",
      image: dubai,
      rating: 4.8,
      link: "/blogs/dubai"
    },

    {
      id: 3,
      title: "Exploring Bali On A Budget",
      location: "Bali, Indonesia",
      image: bali,
      rating: 4.7,
      link: "/blogs/bali"
    },

    {
      id: 4,
      title: "Best Beaches In Goa",
      location: "Goa, India",
      image: goa,
      rating: 4.8,
      link: "/blogs/goa"
    },

    {
      id: 5,
      title: "Adventure Guide To Ladakh",
      location: "Ladakh, India",
      image: ladakh,
      rating: 4.9,
      link: "/blogs/ladakh"
    },

    {
      id: 6,
      title: "Weekend Escape To Rishikesh",
      location: "Rishikesh, India",
      image: rishikesh,
      rating: 4.7,
      link: "/blogs/rishikesh"
    },
  ];

  return (
    <>
      {/* HERO BANNER */}

      <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
  <img
    src={banner}
    alt="Blog Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
    <div className="max-w-4xl">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-bold
          text-white
          leading-tight
        "
      >
        Travel Stories
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="
          text-lg
          md:text-2xl
          text-white/90
          mt-6
        "
      >
        Discover destinations, guides and unforgettable journeys.
      </motion.p>
    </div>
  </div>
</section>

      {/* FILTER BOX */}

     { /* <div className="px-6 md:px-10">
  <div
    className="
      max-w-6xl
      mx-auto
      -mt-16
      relative
      z-20
      bg-white
      rounded-3xl
      shadow-2xl
      p-6
      md:p-8
    "
  >
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <input
        placeholder="Destination"
        className="
          border
          border-gray-300
          p-4
          rounded-xl
          outline-none
          focus:border-cyan-500
        "
      />

      <select className="border border-gray-300 p-4 rounded-xl">
        <option>Travel Guides</option>
      </select>

      <select className="border border-gray-300 p-4 rounded-xl">
        <option>Adventure</option>
      </select>

      <button
        className="
        py-4
        px-4
          bg-[#062B3D]
          text-white
          rounded-xl
          hover:bg-[#0B435D]
          transition
          font-semibold
        "
      >
        Explore
      </button>
    </div>
  </div>
</div> */}

      {/* BLOG CARDS */}

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

    <div className="text-center mb-16">
      <p
        className="
          uppercase
          tracking-[6px]
          text-cyan-300
          font-medium
          mb-4
        "
      >
        Explore The Beautiful
      </p>

      <h2
        className="
          text-4xl
          md:text-6xl
          font-bold
         text-[#041D29]
        "
      >
        Travel Blogs
      </h2>
    </div>

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      "
    >
            {Blogs.map((blog) => (
              <motion.div
  key={blog.id}
  whileHover={{ y: -10 }}
  transition={{ duration: 0.3 }}
  className="
    overflow-hidden
    rounded-3xl
    bg-white
    shadow-xl
    group
  "
>
  <div className="relative overflow-hidden">

    <img
      src={blog.image}
      alt={blog.title}
      className="
        h-[320px]
        w-full
        object-cover
        group-hover:scale-110
        transition-all
        duration-700
      "
    />

    <div
      className="
        absolute
        top-4
        right-4
        bg-white
        rounded-full
        px-3
        py-1
        flex
        items-center
        gap-1
        shadow
      "
    >
      <Star size={14} fill="gold" color="gold" />
      {blog.rating}
    </div>

  </div>

  <div className="p-6">

    <h3
      className="
        text-2xl
        font-bold
        text-[#062B3D]
        mb-4
        leading-snug
      "
    >
      {blog.title}
    </h3>

    <div
      className="
        flex
        items-center
        gap-2
        text-gray-500
        mb-4
      "
    >
      <MapPin size={16} />
      {blog.location}
    </div>

    <Link
  to={blog.link}
  className="
  text-cyan-600
  font-semibold
  hover:text-cyan-800
  transition
  "
>
  Read More →
</Link>

  </div>
</motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL INSPIRATION */}

       {/* <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[4px] mb-4">
                Travel Inspiration
              </p>

              <h2 className="text-6xl font-bold">
                Conquer The
                <br />
                Mountains
              </h2>

              <p className="mt-6 text-gray-600">
                Discover breathtaking adventures,
                hidden gems and unforgettable journeys.
              </p>
            </div>

            <img
              src={mountain}
              alt="Mountain"
              className="w-full rounded-3xl"
            />
          </div> 
        </div>
      </section> */}  
    </>
  );
}