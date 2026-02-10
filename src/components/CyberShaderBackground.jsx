import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    
    // Slow movement
    float time = uTime * 0.2;

    // Create organic flow with multiple noise layers
    float noise1 = snoise(uv * 3.0 + time);
    float noise2 = snoise(uv * 6.0 - time * 0.5);
    
    // Combine noise for texture
    float combinedNoise = (noise1 + noise2 * 0.5);
    
    // Smooth stepping for "liquid" look
    float pattern = smoothstep(-0.2, 0.2, combinedNoise);

    // Dynamic color mixing
    // Base dark background
    vec3 darkPurple = vec3(0.05, 0.0, 0.1); 
    
    // Mix user's accent colors based on noise
    vec3 mixedColor = mix(uColor1, uColor2, noise1 * 0.5 + 0.5);
    
    // Final composite: mainly dark with glowing "smoke" or "plasma"
    vec3 finalColor = mix(darkPurple, mixedColor, pattern * 0.6);
    
    // Add subtle grain/dither to reduce banding and give "retro" feel
    float grain = snoise(uv * 500.0 + uTime) * 0.03;
    finalColor += grain;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function ShaderPlane() {
    const mesh = useRef();
    const { viewport } = useThree();

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColor1: { value: new THREE.Color("#bd34fe") }, // User's Accent Purple
            uColor2: { value: new THREE.Color("#00bfff") }, // User's Accent Blue
        }),
        []
    );

    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]} scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                wireframe={false}
            />
        </mesh>
    );
}

export default function CyberShaderBackground() {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                pointerEvents: "none",
                background: "#050505",
            }}
        >
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ShaderPlane />
            </Canvas>
        </div>
    );
}
