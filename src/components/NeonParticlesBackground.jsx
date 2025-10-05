
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
        background: "radial-gradient(circle at 30% 30%, #00ffe7 0%, #0f0c29 80%)",
        boxShadow: "0 0 80px 10px #00ffe7, 0 0 120px 30px #ff00cc inset",
        filter: "blur(0.5px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "60%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255,0,204,0.3)",
          boxShadow: "0 0 80px 40px #ff00cc",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "20%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(0,255,231,0.2)",
          boxShadow: "0 0 60px 20px #00ffe7",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
};

export default NeonParticlesBackground;