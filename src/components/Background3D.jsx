import React from 'react';

export default function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      backgroundColor: '#000000', // Pure black as requested
      backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 100%)' // Subtle gradient for depth
    }}>
      {/* Optional: Simple CSS stars if desired, but keeping it clean for now to ensure stability */}
    </div>
  );
}
