import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getFilter,
  getOpacity,
  getTransform,
  getZIndex,
} from "../utils/carouselUtils";

const items = [
  {
    id: 1,
    name: "R1D1",
    title: "INDUSTRIAL SERIES",
    tagline: "The Future of Industrial Automation",
    description:
      "Advanced precision and unmatched efficiency for manufacturing",
    image: "/images/1.jpg", // Update with your image paths
    specs: {
      "Used Time": "6 hours",
      "Charging port": "Type-C",
      Compatible: "Android",
      Bluetooth: "5.3",
      Controlled: "Touch",
    },
  },
  {
    id: 2,
    name: "R1D2",
    title: "INDUSTRIAL SERIES",
    tagline: "The Future of Industrial Automation",
    description:
      "Advanced precision and unmatched efficiency for manufacturing",
    image: "/images/1.jpg", // Update with your image paths
    specs: {
      "Used Time": "6 hours",
      "Charging port": "Type-C",
      Compatible: "Android",
      Bluetooth: "5.3",
      Controlled: "Touch",
    },
  },
  {
    id: 3,
    name: "R1D3",
    title: "INDUSTRIAL SERIES",
    tagline: "The Future of Industrial Automation",
    description:
      "Advanced precision and unmatched efficiency for manufacturing",
    image: "/images/1.jpg", // Update with your image paths
    specs: {
      "Used Time": "6 hours",
      "Charging port": "Type-C",
      Compatible: "Android",
      Bluetooth: "5.3",
      Controlled: "Touch",
    },
  },
  {
    id: 4,
    name: "R1D4",
    title: "INDUSTRIAL SERIES",
    tagline: "The Future of Industrial Automation",
    description:
      "Advanced precision and unmatched efficiency for manufacturing",
    image: "/images/1.jpg", // Update with your image paths
    specs: {
      "Used Time": "6 hours",
      "Charging port": "Type-C",
      Compatible: "Android",
      Bluetooth: "5.3",
      Controlled: "Touch",
    },
  },
  // Add more items...
];

export default function Carousel2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShowingDetail, setIsShowingDetail] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    if (!isShowingDetail) {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }
  }, [isShowingDetail]);

  const prevSlide = useCallback(() => {
    if (!isShowingDetail) {
      setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  }, [isShowingDetail]);

  // Increased autoplay timer to 12 seconds
  useEffect(() => {
    if (isAutoPlaying && !isShowingDetail) {
      const timer = setInterval(nextSlide, 12000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, isShowingDetail, nextSlide]);

  return (
    <div className="carousel relative h-screen bg-gradient-to-b from-neutral-100 to-neutral-200">
      <div className="list relative w-[90%] max-w-[1400px] h-[80%] mx-auto pt-20">
        <AnimatePresence>
          {items.map((item, index) => {
            const position =
              (index - activeIndex + items.length) % items.length;
            return (
              <motion.div
                key={item.id}
                className={`item absolute left-0 w-[80%] h-full
                          ${position === 1 ? "z-10" : ""}`}
                style={{
                  transform: getTransform(position),
                  filter: getFilter(position),
                  opacity: getOpacity(position),
                  zIndex: getZIndex(position),
                }}
              >
                {/* Content Section */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 pl-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl text-neutral-600 mb-2">
                      {item.title}
                    </h3>
                    <h2 className="text-6xl font-bold mb-4">{item.name}</h2>
                    <p className="text-lg text-neutral-600 mb-8 max-w-[400px]">
                      {item.description}
                    </p>
                    <button
                      onClick={() => setIsShowingDetail(true)}
                      className="text-lg border-b-2 border-neutral-800 pb-1
                               hover:border-neutral-600 transition-colors"
                    >
                      SEE MORE ↗
                    </button>
                  </motion.div>
                </div>

                {/* Image Section */}
                <div className="absolute right-0 w-1/2 h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] h-auto
                             object-contain transition-transform duration-500"
                  />

                  {/* Specs Overlay */}
                  {isShowingDetail && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="absolute top-1/2 right-0 -translate-y-1/2
                               bg-black/30 backdrop-blur-md rounded-lg p-8
                               text-white w-[90%]"
                    >
                      <h3 className="text-3xl font-bold mb-6">{item.name}</h3>
                      <div className="grid grid-cols-2 gap-6">
                        {Object.entries(item.specs).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <p className="text-sm text-white/70">{key}</p>
                            <p className="text-lg font-semibold">{value}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 w-full flex justify-center gap-8">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border-2 border-neutral-800
                   hover:bg-neutral-800 hover:text-white transition-colors"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border-2 border-neutral-800
                   hover:bg-neutral-800 hover:text-white transition-colors"
        >
          →
        </button>
        {isShowingDetail && (
          <button
            onClick={() => setIsShowingDetail(false)}
            className="absolute left-1/2 -translate-x-1/2 border-b border-neutral-800
                     hover:border-neutral-600 transition-colors px-4"
          >
            See All ↗
          </button>
        )}
      </div>
    </div>
  );
}
