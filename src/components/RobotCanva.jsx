import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  ContactShadows,
  Environment,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { RobotModel } from "./RobotModal";

export function RobotCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is our md breakpoint
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 45,
        near: 0.1,
        far: 1000,
      }}
      className="h-full w-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <spotLight position={[0, 10, 0]} intensity={0.5} />

      <Suspense fallback={null}>
        <RobotModel
          scale={isMobile ? 1.4 : 2.2}
          position={[0, isMobile ? -0.9 : -0.9, 0]}
          variant="float"
        />
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4}
        />
        <Environment preset="studio" />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
