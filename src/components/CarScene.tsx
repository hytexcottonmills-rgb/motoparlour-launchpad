import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function SportsCar() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.3}>
      <group ref={groupRef} position={[0, -0.5, 0]}>
        {/* Main body */}
        <mesh position={[0, 0.45, 0]}>
          <boxGeometry args={[3.2, 0.5, 1.4]} />
          <meshStandardMaterial color="#d41920" metalness={0.85} roughness={0.15} />
        </mesh>
        {/* Cabin / roof */}
        <mesh position={[0.1, 0.9, 0]}>
          <boxGeometry args={[1.6, 0.45, 1.2]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.1} transparent opacity={0.7} />
        </mesh>
        {/* Hood slope */}
        <mesh position={[1.2, 0.6, 0]} rotation={[0, 0, -0.15]}>
          <boxGeometry args={[1.2, 0.3, 1.3]} />
          <meshStandardMaterial color="#d41920" metalness={0.85} roughness={0.15} />
        </mesh>
        {/* Rear slope */}
        <mesh position={[-1.0, 0.65, 0]} rotation={[0, 0, 0.2]}>
          <boxGeometry args={[1.0, 0.3, 1.3]} />
          <meshStandardMaterial color="#d41920" metalness={0.85} roughness={0.15} />
        </mesh>
        {/* Rear wing */}
        <mesh position={[-1.6, 1.05, 0]}>
          <boxGeometry args={[0.4, 0.04, 1.5]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Wing supports */}
        <mesh position={[-1.5, 0.85, 0.5]}>
          <boxGeometry args={[0.06, 0.35, 0.06]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[-1.5, 0.85, -0.5]}>
          <boxGeometry args={[0.06, 0.35, 0.06]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Front splitter */}
        <mesh position={[1.65, 0.22, 0]}>
          <boxGeometry args={[0.15, 0.06, 1.5]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Side skirts */}
        <mesh position={[0, 0.2, 0.72]}>
          <boxGeometry args={[3.0, 0.08, 0.06]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.2, -0.72]}>
          <boxGeometry args={[3.0, 0.08, 0.06]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Front left wheel */}
        <mesh position={[1.1, 0.05, 0.75]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.28, 0.1, 16, 48]} />
          <meshStandardMaterial color="#111111" metalness={0.3} roughness={0.8} />
        </mesh>
        <mesh position={[1.1, 0.05, 0.75]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.08, 5]} />
          <meshStandardMaterial color="#333333" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Front right wheel */}
        <mesh position={[1.1, 0.05, -0.75]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.28, 0.1, 16, 48]} />
          <meshStandardMaterial color="#111111" metalness={0.3} roughness={0.8} />
        </mesh>
        <mesh position={[1.1, 0.05, -0.75]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.08, 5]} />
          <meshStandardMaterial color="#333333" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Rear left wheel */}
        <mesh position={[-1.1, 0.05, 0.78]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.3, 0.12, 16, 48]} />
          <meshStandardMaterial color="#111111" metalness={0.3} roughness={0.8} />
        </mesh>
        <mesh position={[-1.1, 0.05, 0.78]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.24, 0.24, 0.1, 5]} />
          <meshStandardMaterial color="#333333" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Rear right wheel */}
        <mesh position={[-1.1, 0.05, -0.78]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.3, 0.12, 16, 48]} />
          <meshStandardMaterial color="#111111" metalness={0.3} roughness={0.8} />
        </mesh>
        <mesh position={[-1.1, 0.05, -0.78]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.24, 0.24, 0.1, 5]} />
          <meshStandardMaterial color="#333333" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Headlights */}
        <mesh position={[1.6, 0.5, 0.45]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
        </mesh>
        <mesh position={[1.6, 0.5, -0.45]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
        </mesh>
        {/* Tail lights */}
        <mesh position={[-1.6, 0.5, 0.45]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#d41920" emissive="#d41920" emissiveIntensity={3} />
        </mesh>
        <mesh position={[-1.6, 0.5, -0.45]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#d41920" emissive="#d41920" emissiveIntensity={3} />
        </mesh>
        {/* Hood vents */}
        <mesh position={[0.9, 0.72, 0.25]} rotation={[0.1, 0, 0]}>
          <boxGeometry args={[0.3, 0.02, 0.12]} />
          <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0.9, 0.72, -0.25]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[0.3, 0.02, 0.12]} />
          <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Rear diffuser */}
        <mesh position={[-1.6, 0.25, 0]}>
          <boxGeometry args={[0.1, 0.15, 1.3]} />
          <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Exhaust tips */}
        <mesh position={[-1.7, 0.25, 0.3]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.1, 12]} />
          <meshStandardMaterial color="#444444" metalness={0.95} roughness={0.1} />
        </mesh>
        <mesh position={[-1.7, 0.25, -0.3]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.1, 12]} />
          <meshStandardMaterial color="#444444" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

export default function CarScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [3, 2, 5], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <spotLight position={[5, 5, 5]} intensity={1.2} color="#d41920" angle={0.4} penumbra={0.8} />
          <spotLight position={[-5, 3, -3]} intensity={0.6} color="#ffffff" angle={0.6} penumbra={1} />
          <pointLight position={[0, -2, 3]} intensity={0.3} color="#d41920" />
          <pointLight position={[3, 1, -2]} intensity={0.2} color="#ff6666" />
          <SportsCar />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
