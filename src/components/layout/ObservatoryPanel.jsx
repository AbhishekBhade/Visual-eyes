function ObservatoryPanel({ children }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-cyan-400/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(94,230,255,0.08)]
      "
    >

      {/* Scanline Overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.08)_51%)]
          bg-[size:100%_4px]
        "
      />

      {children}
    </div>
  );
}

export default ObservatoryPanel;