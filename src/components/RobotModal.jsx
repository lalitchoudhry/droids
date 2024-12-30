import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import model from "../assets/3d/robot.glb";

export function RobotModel({
  scale = 2,
  position = [0, -1, 0],
  variant = "float",
  isHovered,
}) {
  const robotRef = useRef(null);

  useFrame((state) => {
    if (!robotRef.current) return;

    if (variant === "float") {
      // Floating animation for the main hero section
      robotRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      robotRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    } else if (variant === "carousel") {
      // Rotation animation for carousel unless hovered
      if (!isHovered) {
        robotRef.current.rotation.y += 0.01;
      }
    }
  });

  const { scene } = useGLTF(model);

  // Clone the scene to prevent sharing issues
  const clonedScene = scene.clone();

  return (
    <group ref={robotRef}>
      <primitive object={clonedScene} scale={scale} position={position} />
    </group>
  );
}

// Preload the model
useGLTF.preload(model);
