import { motion } from "framer-motion";

export function GlowText({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`relative ${className}`}
    >
      <div
        className="absolute inset-0 blur-3xl opacity-30 bg-[#F9F9F8]"
        aria-hidden="true"
      >
        {children}
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}
