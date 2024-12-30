import { motion } from "framer-motion";
import { RobotCanvas } from "../components/RobotCanva";
import { Navbar } from "../components/Navbar";
import GeometricBg from "../components/GeometricBg";
import React from "react";
import { RobotCarousel } from "../components/RobotsCarousal/Carousal";
import Hero1 from "../components/Hero1";

function Home() {
  return (
    <main className="relative ">
      <div className="bg-home bg-cover bg-center bg-no-repeat">
        <div className="relative h-screen bg-gradient-to-b from-white/70 via-white to-[#c8c8c8]/10 overflow-hidden backdrop-blur-sm">
          {/* <GeometricBg /> */}
          <Navbar />

          {/* Main Content Container */}
          <div className="relative h-full">
            {/* 3D Robot Canvas - Positioned behind content on mobile */}
            <div className="absolute inset-0 xl:z-20">
              <RobotCanvas />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full">
              <Hero />
            </div>
          </div>
        </div>
      </div>
      <RobotCarousel />
      <Hero1 />
    </main>
  );
}

export function Hero() {
  return (
    <div className="relative h-full w-full">
      {/* Mobile Card View Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden absolute inset-0 top-20 flex flex-col justify-between px-4 py-12"
      >
        {/* Top Section - Company Info */}
        <div className="space-y-6">
          {/* Main Title */}
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider"
            >
              Next-Gen Robotics
            </motion.span>
            <h1 className="text-3xl font-mon text-black">
              Revolutionizing Everyday Life <br />
              with Intelligent Robotics.
            </h1>
            <p className="text-sm text-black/60 font-int leading-relaxed">
              Experience the future of robotics with OpenDroids. Our robots
              combine advanced AI, precise engineering, and intuitive design to
              deliver unparalleled automation solutions for various industries.
            </p>
          </div>
        </div>

        {/* Bottom Section - Navigation Hint */}
      </motion.div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative h-full">
        {/* Background Text */}
        {/* <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center text-[20vw] font-light font-mon tracking-wider text-black/5 select-none"
        >
          DROIDS
        </motion.h1> */}

        {/* Left Content */}
        <div className="absolute left-12 bottom-12 space-y-8 max-w-lg">
          <div className="space-y-4">
            <span className="text-primary font-bold font-mon text-sm uppercase tracking-wide">
              Next-Gen Robotics
            </span>
            <h2 className="text-5xl font-ligh font-mon leading-tight">
              Revolutionizing Everyday Life with Intelligent Robotics.
            </h2>
            <p className="text-sm text-black/60 font-int leading-relaxed">
              Experience the future of robotics with OpenDroids. Our robots
              combine advanced AI, precise engineering, and intuitive design to
              deliver unparalleled automation solutions for various industries.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm group font-mon"
          >
            Discover Our Robots
            <motion.svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.button>
        </div>

        {/* Right Side Features */}
        <div className="absolute right-12 bottom-12 space-y-8 max-w-md">
          <div className="space-y-6">
            <p className="font-int text-sm text-black/70 leading-relaxed">
              Explore cutting-edge, intelligent droids designed for efficiency,
              companionship, and innovation.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-mon">
                  Advanced AI Integration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-mon">
                  Open Source Architecture
                </span>
              </div>
            </div>
          </div>
          <div className="h-0.5 bg-gradient-to-r from-primary/80 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
