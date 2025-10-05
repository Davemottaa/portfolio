
import React from "react";

const NeonParticlesBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        background: "radial-gradient(circle at 40% 40%, #b2f7ef 0%, #232946 100%)",
        boxShadow: "0 0 80px 10px #b2f7ef, 0 0 120px 30px #eeb7b7 inset",
        filter: "blur(0.5px)",
        transition: "background 0.3s"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "55%",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "rgba(238,183,183,0.25)",
          boxShadow: "0 0 60px 30px #eeb7b7",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          right: "18%",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "rgba(178,247,239,0.18)",
          boxShadow: "0 0 40px 15px #b2f7ef",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
};

export default NeonParticlesBackground;