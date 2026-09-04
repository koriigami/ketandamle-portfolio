import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Environment, Float } from '@react-three/drei'
import { Suspense, useRef } from 'react'

function Blob() {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = t * 0.08
    ref.current.rotation.y = t * 0.12
  })
  return (
    <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.9}>
      <mesh ref={ref} scale={2.3}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          color="#e85d2f"
          distort={0.42}
          speed={1.4}
          roughness={0.15}
          metalness={0.35}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  )
}

export default function HeroBlob() {
  return (
    <div
      className="absolute inset-0 -z-0"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 4, 5]} intensity={1.2} />
          <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#ffb98a" />
          <Blob />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  )
}
