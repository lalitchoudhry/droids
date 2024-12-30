import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { RobotModel } from "../RobotModal";
import { SpecsOverlay } from "./SpecsOverlay";
import { Navigation } from "./Navigation";

const robots = [
  {
    id: 1,
    name: "R1D1",
    tagline: "The Future of Industrial Automation",
    description:
      "Advanced precision and unmatched efficiency for manufacturing",
    previewImage: "/robots/r1d1-preview.jpg",
    specs: {
      power: "2000W",
      height: "1.8m",
      weight: "150kg",
      speed: "30km/h",
    },
  },
  {
    id: 2,
    name: "R1D2",
    tagline: "Next-Gen Logistics Solution",
    description: "Streamlined warehouse operations with AI-powered navigation",
    previewImage: "/robots/r1d2-preview.jpg",
    specs: {
      power: "2500W",
      height: "2.1m",
      weight: "180kg",
      speed: "35km/h",
    },
  },
  {
    id: 3,
    name: "R2D3",
    tagline: "Smart Manufacturing Assistant",
    description: "Collaborative robot designed for complex assembly tasks",
    previewImage: "/robots/r2d3-preview.jpg",
    specs: {
      power: "3000W",
      height: "2.3m",
      weight: "200kg",
      speed: "40km/h",
    },
  },
];

export function RobotCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % robots.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + robots.length) % robots.length);
  }, []);

  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, isHovered, nextSlide]);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-[#c8c8c8] via-white to-white">
      {/* Enhanced Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-0 left-0 w-full z-10 pt-12 px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-primary/50 to-primary" />
            <span className="text-primary-light/80 text-sm font-medium uppercase tracking-wider">
              OpenDroids Series
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Next Generation Robotics
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Discover our cutting-edge robotic solutions designed to
            revolutionize industries and enhance human capabilities.
          </p>
        </div>
      </motion.div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-grid-white/[0.02] animate-grid" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Enhanced Preview Slides */}
        <AnimatePresence>
          <motion.div
            key={`prev-${activeIndex}`}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-[25vw] h-[40vh] cursor-pointer"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            onClick={prevSlide}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img
                src={
                  robots[(activeIndex - 1 + robots.length) % robots.length]
                    .previewImage
                }
                alt="Previous Robot"
                className="w-full h-full object-cover opacity-40 hover:opacity-60 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="text-white/80 text-xl font-bold">
                  Previous
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            key={`next-${activeIndex}`}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-[25vw] h-[40vh] cursor-pointer"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            onClick={nextSlide}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img
                src={robots[(activeIndex + 1) % robots.length].previewImage}
                alt="Next Robot"
                className="w-full h-full object-cover opacity-40 hover:opacity-60 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 right-0 w-full p-6 text-right">
                <span className="text-white/80 text-xl font-bold">Next</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Model Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${activeIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center z-20"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <span className="text-primary-light text-sm font-medium">
                Model {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </motion.div>
            <h2 className="text-7xl font-bold text-white mb-4 tracking-tight">
              {robots[activeIndex].name}
            </h2>
            <p className="text-2xl text-neutral-300 font-light">
              {robots[activeIndex].tagline}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced 3D Model Stage */}
        <div
          className="w-[50vw] h-[60vh] relative"
          onMouseEnter={() => {
            setIsHovered(true);
            setIsAutoPlaying(false);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsAutoPlaying(true);
          }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Float
              speed={1}
              rotationIntensity={isHovered ? 2 : 0.5}
              floatIntensity={1}
            >
              <RobotModel variant="carousel" isHovered={isHovered} />
            </Float>
            <Environment preset="studio" />
          </Canvas>

          <SpecsOverlay
            specs={robots[activeIndex].specs}
            isVisible={isHovered}
          />
        </div>

        {/* Enhanced Navigation */}
        <Navigation
          totalSlides={robots.length}
          currentSlide={activeIndex}
          onPrevious={prevSlide}
          onNext={nextSlide}
          currentModel={robots[activeIndex]}
        />
      </div>
    </div>
  );
}
