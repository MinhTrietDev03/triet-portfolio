import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      sizes[i] = Math.random() * 0.05 + 0.01;
    }
    return [positions, sizes];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#22d3ee"
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingOrb({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * speed) * 0.5;
    ref.current.rotation.x = t * 0.2 * speed;
    ref.current.rotation.y = t * 0.3 * speed;
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.6, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.35}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_60%)]" />
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.6} color="#22d3ee" />
          <pointLight position={[-10, -10, -10]} intensity={0.4} color="#a855f7" />
          <ParticleField />
          <FloatingOrb position={[-4, 2, -2]} color="#22d3ee" speed={0.5} />
          <FloatingOrb position={[4, -2, -3]} color="#a855f7" speed={0.7} />
          <FloatingOrb position={[0, 3, -5]} color="#ec4899" speed={0.4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
