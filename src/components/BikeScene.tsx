import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function MotorcycleModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
      <group ref={groupRef}>
        {/* Body/Frame */}
        <mesh position={[0, 0.3, 0]} rotation={[0, 0, 0.1]}>
          <boxGeometry args={[2.4, 0.5, 0.7]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Tank */}
        <mesh position={[0.3, 0.8, 0]}>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial color="#ff6b00" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Engine block */}
        <mesh position={[-0.2, 0, 0]}>
          <boxGeometry args={[0.8, 0.6, 0.6]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.95} roughness={0.15} />
        </mesh>
        {/* Front wheel */}
        <mesh position={[1.3, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.5, 0.12, 16, 48]} />
          <meshStandardMaterial color="#111111" metalness={0.3} roughness={0.8} />
        </mesh>
        {/* Front wheel rim */}
        <mesh position={[1.3, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.38, 0.38, 0.08, 24]} />
          <meshStandardMaterial color="#444444" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Rear wheel */}
        <mesh position={[-1.2, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.5, 0.15, 16, 48]} />
          <meshStandardMaterial color="#111111" metalness={0.3} roughness={0.8} />
        </mesh>
        {/* Rear wheel rim */}
        <mesh position={[-1.2, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.1, 24]} />
          <meshStandardMaterial color="#444444" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Fork */}
        <mesh position={[1.1, 0.15, 0]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.04, 0.04, 1.2, 8]} />
          <meshStandardMaterial color="#888888" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Exhaust */}
        <mesh position={[-0.8, -0.15, 0.35]} rotation={[0, 0, 0.1]}>
          <cylinderGeometry args={[0.06, 0.1, 1.2, 12]} />
          <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.15} />
        </mesh>
        {/* Seat */}
        <mesh position={[-0.3, 0.72, 0]}>
          <boxGeometry args={[1, 0.15, 0.5]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.9} />
        </mesh>
        {/* Headlight */}
        <mesh position={[1.5, 0.5, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#ff6b00" emissive="#ff6b00" emissiveIntensity={2} />
        </mesh>
      </group>
    </Float>
  );
}

export default function BikeScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.15} />
          <spotLight position={[5, 5, 5]} intensity={1} color="#ff6b00" angle={0.4} penumbra={0.8} />
          <spotLight position={[-5, 3, -3]} intensity={0.5} color="#ffffff" angle={0.6} penumbra={1} />
          <pointLight position={[0, -2, 3]} intensity={0.3} color="#ff8c00" />
          <MotorcycleModel />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
