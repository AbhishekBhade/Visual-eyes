import { motion } from "framer-motion";
import RetroCube from "../ui/RetroCube";

function AtmosphereBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Main Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-10%]
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/20
          blur-[140px]
        "
      />

      {/* Secondary Purple Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-15%]
          right-[-5%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-fuchsia-500/10
          blur-[120px]
        "
      />

      {/* Horizon Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#111827]/40
          via-transparent
          to-[#020617]
        "
      />

      {/* Subtle Retro 3D Cube */}
      <div className="pointer-events-none absolute left-6 bottom-8 opacity-80">
        <RetroCube />
      </div>

    </div>
  );
}

export default AtmosphereBackground;