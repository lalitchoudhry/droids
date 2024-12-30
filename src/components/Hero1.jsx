import { Canvas } from "@react-three/fiber";
import { Environment, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";
// ASSETS
import robot1 from "../assets/images/robots/r1d1.png";
import robot2 from "../assets/images/robots/r2d3.png";

function Hero1() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-home bg-cover bg-bottom bg-no-repeat bg-[#060607]">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}

export default Hero1;

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#b1b1b1] via-white/30 to-white bg-[#b1b1b1]">
      {/* Base background */}
      <div className="absolute inset-0 bg-" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
              linear-gradient(to right, #F9F9F8 1px, transparent 1px),
              linear-gradient(to bottom, #F9F9F8 1px, transparent 1px)
            `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#482822]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#434040]/10 rounded-full blur-[120px]" />
    </div>
  );
}

export function HeroContent() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-[#F9F9F8]">
      {/* Main Content */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 pt-32 md:pt-20">
        <div className="text-center ">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-black tracking-[0.3em] md:mb-4"
          >
            INTRODUCING
          </motion.p>
          <h1 className="text-7xl md:text-[10rem] font-mon leading-none tracking-[0.1em] text-[#060607]">
            DROIDS
          </h1>
          {/* <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-light tracking-[0.4em] mt-8 text-[#817D7C]"
          >
            NEXT GENERATION
          </motion.h2> */}
        </div>

        {/* Robot Image */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="relative w-full"
        >
          <div className="flex justify-center items-center gap-12 -mt-10 md:-mt-20">
            <img
              src={robot2}
              alt="OpenDroids Robot"
              className="object-contain w-[34rem] brightness-90"
            />
            <img
              src={robot1}
              alt="OpenDroids Robot"
              className="object-contain w-52 md:w-[20rem] -ml-40 md:-ml-52 -mt-6 brightness-90"
            />
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="md:absolute bottom-20 w-full flex flex-col items-center md:items-start"
        >
          <motion.h1
            className="text-dark-gray text-xl sm:text-2xl font-mon font-medium max-w-lg leading-relaxed mb-4 sm:mb-8 text-center md:text-left"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            {Array.from(
              "The Ultimate Home Robot for Efficient House Cleaning and Chores"
            ).map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 bg-black text-white text-sm group font-mon"
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
        </motion.div>
      </div>
    </div>
  );
}
export function HeroScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
      <Suspense fallback={null}>
        <Stage
          intensity={0.5}
          environment="studio"
          shadows={{
            type: "accumulative",
            color: "#d9d9d9",
            colorBlend: 2,
            opacity: 1,
          }}
          adjustCamera={false}
        >
          <mesh rotation={[-0.5, 0, 0]} position={[0, -2, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="#f5f5f5" />
          </mesh>
        </Stage>
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
