import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destination", path: "/destination" },
    { name: "Blogs", path: "/blogs" },
    { name: "Gallery", path: "/gallery" },
  ];

  const isHome = location.pathname === "/";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-300
      ${
        scrolled || !isHome
          ? "bg-[#062B3D]/55 backdrop-blur-lg shadow-xl py-4"
          : "bg-[#062B3D] lg:bg-transparent py-6"
      }
      `}
    >
      {/* BIGGER CONTAINER */}

      <div className="max-w-375 mx-auto px-6 md:px-10 lg:px-14 xl:px-16 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Prashant Tours & Travels"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-white font-medium">
            {navLinks.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="hover:text-cyan-300 transition duration-300"
                >
                  {item.name}
                </Link>

                <span
                  className={`absolute left-0 -bottom-2 h-0.5 bg-cyan-300 transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full bg-[#FF7A1A] text-white font-semibold shadow-lg hover:bg-[#E96B13] hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}

      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          lg:hidden
          bg-[#062B3D]
          mt-4
          border-t
          border-white/10
          "
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className="
                text-white
                border-b
                border-white/10
                pb-3
                "
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="
              text-center
              py-3
              rounded-xl
              bg-[#FF7A1A]
              text-white
              font-semibold
              "
            >
              Get Travel Quote
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
