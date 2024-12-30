import { motion } from "framer-motion";
export function Navigation({
  totalSlides,
  currentSlide,
  onPrevious,
  onNext,
  currentModel,
}) {
  return (
    <div className="absolute bottom-12 left-0 w-full px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Model Info */}
        <div className="flex-1">
          <motion.div
            key={currentModel.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-2"
          >
            <p className="text-neutral-400 text-sm">
              {currentModel.description}
            </p>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPrevious}
            className="flex items-center justify-center w-14 h-14 
                     bg-white/5 text-white rounded-xl
                     border border-white/10 backdrop-blur-sm
                     hover:bg-primary hover:border-primary
                     transition-all duration-300 relative group"
          >
            <div className="absolute inset-0 rounded-xl border border-primary/20" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <div className="flex gap-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.div key={index} className="relative">
                <motion.div
                  className="w-2.5 h-2.5 rounded-full"
                  animate={{
                    scale: currentSlide === index ? 1 : 0.8,
                    backgroundColor:
                      currentSlide === index
                        ? "rgb(var(--primary-rgb))"
                        : "rgba(var(--primary-rgb), 0.2)",
                  }}
                />
                {currentSlide === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="flex items-center justify-center w-14 h-14 
                     bg-white/5 text-white rounded-xl
                     border border-white/10 backdrop-blur-sm
                     hover:bg-primary hover:border-primary
                     transition-all duration-300 relative group"
          >
            <div className="absolute inset-0 rounded-xl border border-primary/20" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
