import { motion } from "framer-motion";
import { Html } from "@react-three/drei";

export function SpecsPointer({
  position,
  title,
  description,
  isActive,
  onClick,
}) {
  return (
    <Html position={[position.x, position.y, position.z]}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="relative group"
        onClick={onClick}
      >
        {/* Pointer Dot */}
        <motion.div
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
            backgroundColor: isActive ? "#FF4D4D" : "#ffffff",
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-4 h-4 rounded-full cursor-pointer
                   border-2 border-white shadow-lg
                   group-hover:bg-white/80 transition-all"
        />

        {/* Connecting Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-1/2 left-full h-[2px] w-24
                   bg-white/50 origin-left"
        />

        {/* Hover Label */}
        <div
          className="absolute left-full ml-6 top-1/2 -translate-y-1/2
                      opacity-0 group-hover:opacity-100 transition-opacity
                      whitespace-nowrap bg-black/50 px-3 py-1 rounded-full
                      text-white text-sm"
        >
          {title}
        </div>
      </motion.div>
    </Html>
  );
}
