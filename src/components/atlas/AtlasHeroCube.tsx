"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function Cube() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }

    if (groupRef.current) {
      const targetX = state.pointer.x * 0.5;
      const targetY = state.pointer.y * 0.5;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -targetY,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetX,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.6, 2.6, 2.6]} />
        <meshStandardMaterial
          color="#0B1426"
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
        <Edges
          lineWidth={2}
          threshold={15}
          color="#7C3AED"
        />
      </mesh>
    </group>
  );
}

/** Inner cube — smaller, blue accent, counter-rotating */
function InnerCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.1;
      meshRef.current.rotation.y -= delta * 0.15;
      meshRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.4, 1.4, 1.4]} />
      <meshStandardMaterial
        color="#020611"
        roughness={0.3}
        metalness={0.6}
        transparent
        opacity={0.6}
      />
      <Edges
        lineWidth={1}
        threshold={15}
        color="#3B82F6"
      />
    </mesh>
  );
}

/** Orbiting particles around the cube */
function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 80;

  const positions = useRef(
    Float32Array.from(
      Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 6)
    )
  );

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#8B5CF6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export function AtlasHeroCube({ className }: { className?: string }) {
  return (
    <div
      className={`w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[550px] cursor-grab active:cursor-grabbing ${className ?? ""}`}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#7C3AED" />
        <pointLight position={[5, 5, -5]} intensity={0.3} color="#3B82F6" />
        <Environment preset="city" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Cube />
        </Float>

        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
          <InnerCube />
        </Float>

        <Particles />
      </Canvas>
    </div>
  );
}