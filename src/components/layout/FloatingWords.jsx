import { motion } from "framer-motion";

const words = [
  "DATA",
  "SIGNAL",
  "PATTERN",
  "INSIGHT",
  "VISUAL",
  "ANALYZE",
];

function FloatingWords() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {words.map((word, index) => (
        <motion.span
          key={word}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: [0.05, 0.12, 0.05],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`
            absolute
            text-sm
            font-light
            tracking-[0.3em]
            text-cyan-100
            retro-flicker
          `}
          style={{
            top: `${15 + index * 12}%`,
            left: `${10 + index * 13}%`,
            fontFamily: "'Press Start 2P', 'VT323', monospace",
          }}
        >
          {word}
        </motion.span>
      ))}

    </div>
  );
}

export default FloatingWords;