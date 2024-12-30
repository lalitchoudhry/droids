import { motion, AnimatePresence } from "framer-motion";

export function SpecsOverlay({ specs, isVisible }) {
  // Define connection points for each spec
  const specConnections = {
    power: {
      position: { x: "50%", y: "50%" },
      offset: { x: 100, y: 0 },
      label: "Core Power",
    },
    height: {
      position: { x: "50%", y: "70%" },
      offset: { x: -120, y: 20 },
      label: "Height",
    },
    weight: {
      position: { x: "30%", y: "45%" },
      offset: { x: -100, y: -10 },
      label: "Mass Distribution",
    },
    speed: {
      position: { x: "70%", y: "45%" },
      offset: { x: 100, y: -10 },
      label: "Movement Speed",
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="absolute inset-0 pointer-events-none">
          {Object.entries(specs).map(([key, value], index) => {
            const connection = specConnections[key.toLowerCase()] || {
              position: { x: "50%", y: `${30 + index * 20}%` },
              offset: { x: index % 2 ? 100 : -100, y: 0 },
              label: key,
            };

            return (
              <motion.div
                key={key}
                className="absolute"
                style={{
                  left: connection.position.x,
                  top: connection.position.y,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Connection Line */}
                <svg
                  className="absolute top-1/2 left-1/2"
                  width={Math.abs(connection.offset.x) + 20}
                  height={Math.abs(connection.offset.y) + 20}
                  style={{
                    transform: `translate(${
                      connection.offset.x < 0 ? "-100%" : "0%"
                    }, -50%)`,
                  }}
                >
                  <motion.path
                    d={`M ${
                      connection.offset.x < 0
                        ? Math.abs(connection.offset.x)
                        : 0
                    } 10 
                        L ${
                          connection.offset.x < 0 ? 0 : connection.offset.x
                        } 10`}
                    stroke="rgba(102, 51, 204, 0.5)"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                  <motion.circle
                    cx={connection.offset.x < 0 ? 0 : connection.offset.x}
                    cy="10"
                    r="3"
                    fill="#6633cc"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  />
                </svg>

                {/* Spec Card */}
                <motion.div
                  className={`absolute top-1/2 ${
                    connection.offset.x < 0 ? "right-2" : "left-2"
                  } 
                             -translate-y-1/2 w-40`}
                  initial={{
                    opacity: 0,
                    x: connection.offset.x < 0 ? 20 : -20,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div
                    className="bg-white/90 backdrop-blur-md rounded-lg border border-primary/20 
                                shadow-lg overflow-hidden"
                  >
                    <div className="p-3 space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-mono text-primary uppercase tracking-wider">
                          {connection.label}
                        </span>
                      </div>
                      <div className="pl-3 text-xl font-light text-black/80">
                        {value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
}
