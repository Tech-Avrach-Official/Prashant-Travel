import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop"
          alt="Aerial Ocean Travel"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-widest uppercase mb-2 inline-block">
            Welcome to Prashant Telecom
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Your Trusted Partner for <br />
          <span className="text-gradient">Travel & Tour Planning</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white mb-4 max-w-3xl mx-auto font-medium italic"
        >
          Explore the world's most beautiful destinations with personalized
          travel solutions, affordable packages, and exceptional support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/contact"
            className="px-4 py-2 bg-[#FF7A1A] hover:bg-[#e66a15] text-white rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(255,122,26,0.4)] hover:shadow-[0_0_30px_rgba(255,122,26,0.6)] flex items-center gap-2"
          >
            Contact Us <ChevronRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
