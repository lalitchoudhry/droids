import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo/brand-white.svg";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-6"
    >
      {/* Left - Brand Logo */}
      <Link to="/" className="z-50">
        <img src={logo} alt="Mochi" className="w-44 md:w-56" />
      </Link>
      <div className="flex items-center gap-12">
        {/* Center - Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {["Home", "Droids", "Our Team"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`px-6 py-2  text-sm font-medium font-mon uppercase transition-all duration-300 ${
                item === "Home"
                  ? " text-white "
                  : "text-white hover:underline underline-offset-4"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4 z-50">
          <div className="flex items-center">
            <button className="hidden md:block px-4 py-2 bg-white border border-white/20 font-mon text-sm">
              Contact Sales
            </button>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 md:gap-3 group md:hidden"
          >
            <div className="w-10 h-10 rounded-full bg-white/0 flex items-center justify-center">
              {isMenuOpen ? (
                <span className="text-2xl text-primary-dark leading-none">
                  ×
                </span>
              ) : (
                <div className="flex flex-col items-end gap-1">
                  <span className="w-4 h-[2px] bg-white group-hover:w-5 transition-all" />
                  <span className="w-5 h-[2px] bg-white" />
                  <span className="w-8 h-[2px] bg-white" />
                </div>
              )}
            </div>
            <span className="text-xs font-medium tracking-wider hidden md:block">
              {isMenuOpen ? "Close" : "Expand menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40"
        >
          <div className="relative h-full w-full p-8">
            {/* Mobile Menu Links */}
            <motion.div
              className="flex flex-col items-start justify-center h-full gap-8 px-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {["Home", "Droids", "Our Team", "Contact"].map((item, i) => (
                <motion.div key={item} variants={itemVariants} custom={i}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-3xl font-light font-mon uppercase hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};
