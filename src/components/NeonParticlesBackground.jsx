import { useEffect, useRef } from "react";
import * as THREE from "three";

const NeonParticlesBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Estrelas estáticas e pequenas
    const particles = 2500; // muito mais partículas
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const sizes = [];
    const color = new THREE.Color();

    for (let i = 0; i < particles; i++) {
      positions.push(
        (Math.random() - 0.5) * 600,
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300
      );
      // Cores de estrelas: branco, azul claro, amarelo claro
      const rand = Math.random();
      if (rand < 0.75) {
        color.setRGB(1, 1, 1); // maioria branca
      } else if (rand < 0.90) {
        color.setRGB(0.8, 0.9, 1); // azul claro
      } else {
        color.setRGB(1, 1, 0.8); // amarelo claro
      }
      colors.push(color.r, color.g, color.b);
      sizes.push(Math.random() * 1.2 + 0.3); // tamanhos entre 0.3 e 1.5
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    // Custom shader para variar tamanho das estrelas
    const material = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Responsividade
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Render estático
    renderer.render(scene, camera);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        zIndex: 0,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    />
  );
};

export default NeonParticlesBackground;