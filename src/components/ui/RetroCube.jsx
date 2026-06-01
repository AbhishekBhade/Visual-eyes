import React from "react";

function RetroCube({ size = 64 }) {
  const faceStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div className="retro-cube-scene" style={{ width: size, height: size }}>
      <div className="retro-cube" style={{ width: size, height: size }}>
        <div className="face" style={{ ...faceStyle, transform: `translateZ(${size / 2}px)` }}>A</div>
        <div className="face" style={{ ...faceStyle, transform: `rotateY(180deg) translateZ(${size / 2}px)` }}>B</div>
        <div className="face" style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${size / 2}px)` }}>C</div>
        <div className="face" style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${size / 2}px)` }}>D</div>
        <div className="face" style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${size / 2}px)` }}>E</div>
        <div className="face" style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${size / 2}px)` }}>F</div>
      </div>
    </div>
  );
}

export default RetroCube;
