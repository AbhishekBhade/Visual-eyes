import { motion } from "framer-motion";
import useVisualizerStore from "../../store/useVisualizerStore";

function EnterButton() {
  const enterObservatory = useVisualizerStore(
    (state) => state.enterObservatory
  );

  return (
    <motion.button
      onClick={enterObservatory}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 0 30px rgba(94,230,255,0.25)",
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-full
        px-6
        py-3
        text-sm
        font-medium
        uppercase
        tracking-[0.28em]
        text-cyan-100
        backdrop-blur-lg
        transition-all
        duration-500
        retro-button
        retro-scan
      "
    >

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-cyan-300/10
        "
      />

      <span className="relative z-10 retro-flicker">
        Enter Observatory
      </span>

    </motion.button>
  );
}

export default EnterButton;