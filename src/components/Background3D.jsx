import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function StarField(props) {
  const ref = useRef();

  // Generate 1500 random points inside a sphere (reduced from 5000 for performance)
  const sphere = useMemo(() => random.inSphere(new Float32Array(1500), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    // Very subtle rotation for a "static" but alive feel
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 60;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#bd34fe" // Purple color
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      backgroundColor: '#050505', // Very dark bg
      backgroundImage: 'radial-gradient(circle at 50% 50%, #1a0b2e 0%, #000000 100%)' // Deep purple-ish gradient
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  );
}

