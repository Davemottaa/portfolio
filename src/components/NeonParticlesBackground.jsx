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

    // Neon particles
    const particles = 80; // menos partículas
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const color = new THREE.Color();

    for (let i = 0; i < particles; i++) {
      positions.push(
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
      // Neon color (random between blue, pink, green)
      color.setHSL(Math.random(), 1, 0.6);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    const material = new THREE.PointsMaterial({
      size: 10, // maior para destacar as bolas
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      // shape padrão já é círculo
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse interaction
    let mouseX = 0,
      mouseY = 0;
    let targetX = 0,
      targetY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Animation
    let frameId;
    const animate = () => {
      // Suave: aproxima rotação do target
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      points.rotation.y = targetX * 0.7;
      points.rotation.x = targetY * 0.7;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Responsividade
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
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