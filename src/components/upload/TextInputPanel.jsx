import useVisualizerStore from "../../store/useVisualizerStore";

function TextInputPanel() {
  const uploadedText = useVisualizerStore(
    (state) => state.uploadedText
  );

  const setUploadedText = useVisualizerStore(
    (state) => state.setUploadedText
  );

  return (
    <div className="mt-6 w-full">

      <textarea
        value={uploadedText}
        onChange={(e) => setUploadedText(e.target.value)}
        placeholder="Paste raw text here..."
        className="
          h-[220px]
          w-full
          rounded-lg
          border
          border-cyan-400/10
          bg-white/[0.03]
          px-6
          py-5
          text-center
          text-slate-200
          outline-none
          backdrop-blur-xl
          placeholder:text-slate-500
          placeholder:text-center
          focus:border-cyan-300/30
        "
      />

    </div>
  );
}

export default TextInputPanel;