import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, TorusKnot, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { Suspense } from "react";
import ThreeLoader from "./ThreeLoader";

function Sculpture() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += delta * 0.08;
  });

  return (
    <TorusKnot args={[1, 0.35, 140, 24]} scale={1.2} ref={meshRef}>
      <MeshDistortMaterial
        distort={0.3}     
        speed={1}
        roughness={0.15}
        metalness={0.6}
        color={"#a78bfa"}
      />
    </TorusKnot>
  );
}

export default function AboutVisuals() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}       
      gl={{ antialias: true }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} />
      <pointLight position={[-5, -5, -5]} intensity={1.2} color="#00ffd5" />
      <pointLight position={[5, -5, 5]} intensity={1.2} color="#ff6ad5" />

     <Suspense fallback={<ThreeLoader />}>
        <Sculpture />
      </Suspense>


      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.3}
      />
    </Canvas>
  );
}
