import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

// Extracted animation variants
const ANIMATION_VARIANTS = {
  center: {
    x: 0,
    scale: 1,
    zIndex: 5,
    filter: "blur(0px)",
    opacity: 1,
  },
  left: {
    x: "-100%",
    scale: 1.5,
    zIndex: 4,
    filter: "blur(30px)",
    opacity: 0,
  },
  right: {
    x: "50%",
    scale: 0.8,
    zIndex: 3,
    filter: "blur(10px)",
    opacity: 1,
  },
  farRight: {
    x: "90%",
    scale: 0.5,
    zIndex: 2,
    filter: "blur(30px)",
    opacity: 1,
  },
};

// Memoized SpecPoint component
const SpecPoint = memo(({ spec, position }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className={cn(
      "absolute flex items-center gap-3",
      position === "left" && "right-full mr-3",
      position === "right" && "left-full ml-3"
    )}
  >
    <div className="relative">
      <div className="absolute w-3 h-[1px] bg-white/50 top-1/2" />
      <div className="w-2 h-2 rounded-full bg-white" />
    </div>
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: position === "left" ? 20 : -20 }}
      className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg min-w-[120px]"
    >
      <p className="text-gray-400 text-sm">{spec.label}</p>
      <p className="text-white font-medium">{spec.value}</p>
    </motion.div>
  </motion.div>
));

SpecPoint.displayName = "SpecPoint";

// Memoized SpecsOverlay component
const SpecsOverlay = memo(({ specs }) => {
  const specPoints = [
    {
      label: "Used Time",
      value: specs["Used Time"],
      top: "20%",
      position: "left",
    },
    {
      label: "Charging Port",
      value: specs["Charging Port"],
      top: "40%",
      position: "left",
    },
    {
      label: "Compatible",
      value: specs.Compatible,
      top: "30%",
      position: "right",
    },
    {
      label: "Bluetooth",
      value: specs.Bluetooth,
      top: "50%",
      position: "right",
    },
    {
      label: "Controlled",
      value: specs.Controlled,
      top: "70%",
      position: "right",
    },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0"
      />
      <AnimatePresence>
        {specPoints.map((spec, index) => (
          <div key={spec.label} className="absolute" style={{ top: spec.top }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SpecPoint spec={spec} position={spec.position} />
            </motion.div>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
});

SpecsOverlay.displayName = "SpecsOverlay";

// Main ProductCarousel component
const ProductCarousel = ({ products }) => {
  const [items, setItems] = useState(products);
  const [showDetail, setShowDetail] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setItems((prev) => [...prev.slice(1), prev[0]]);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);
  const handleShowDetail = useCallback(() => setShowDetail(true), []);
  const handleHideDetail = useCallback(() => setShowDetail(false), []);

  return (
    <div className="relative  w-full h-screen">
      <div className="relative w-full max-w-7xl mx-auto h-full">
        <div className="relative h-full pt-16">
          <div className="relative w-full h-full">
            {items.slice(0, 4).map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute top-0 left-0 w-4/5 h-4/5 "
                initial={false}
                animate={
                  showDetail && index === 0
                    ? "center"
                    : index === 0
                    ? "left"
                    : index === 1
                    ? "center"
                    : index === 2
                    ? "right"
                    : "farRight"
                }
                variants={ANIMATION_VARIANTS}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full flex flex-col md:flex-row justify-between">
                  <AnimatePresence mode="sync">
                    {index === 1 && !showDetail && (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="w-1/2 p-8 flex flex-col justify-center"
                      >
                        <h3 className="text-2xl font-medium">{item.title}</h3>
                        <h2 className="text-5xl font-medium mt-2">
                          {item.topic}
                        </h2>
                        <p className="text-sm text-gray-600 mt-4">
                          {item.description}
                        </p>
                        <button
                          onClick={handleShowDetail}
                          className="mt-6 w-fit flex items-center gap-2 border-b border-gray-400 pb-1 font-semibold tracking-wide hover:bg-gray-50 transition-colors"
                        >
                          SEE MORE ↗
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className="absolute right-0 top-1/2 w-1/2 aspect-square -translate-y-1/2 overflow-visible rounded-xl"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={item.image}
                        alt={item.topic}
                        className="w-full h-full object-contain"
                      />
                      <AnimatePresence>
                        {isHovering && index === 1 && (
                          <SpecsOverlay specs={item.specs} />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="sync">
            <div className="absolute bottom-8 w-full flex justify-end gap-6 px-8">
              {!showDetail ? (
                <>
                  <motion.button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed border border-gray-100"
                    disabled={isAnimating}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.95)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Previous item"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed border border-gray-100"
                    disabled={isAnimating}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.95)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Next item"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </motion.button>
                </>
              ) : (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  onClick={handleHideDetail}
                  className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 border-b border-gray-400 pb-1 font-semibold tracking-wide hover:bg-gray-50 transition-colors px-2"
                >
                  See All ↗
                </motion.button>
              )}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
