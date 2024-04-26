"use client";

import useWindowSize from "@/hooks/useWindowSize";
import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Scene() {
  const { width } = useWindowSize();

  return (
    <Suspense fallback={null}>
      <Canvas
        orthographic
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 1, -5],
          zoom: 100,
        }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[3, 4, -4]} intensity={100} color="#b8b8ff" />
        <pointLight position={[-3, 4, -3]} intensity={100} color="#b8b8ff" />

        <Float floatIntensity={0.2} speed={1.5}>
          <mesh
            position={[width! / 250, width! / -2500, 0]}
            rotation={[16, 16, 16]}
          >
            <boxGeometry args={[10, 10, 1]} />
            <meshStandardMaterial color="#9381ff" />
          </mesh>
        </Float>
      </Canvas>
    </Suspense>
  );
}
