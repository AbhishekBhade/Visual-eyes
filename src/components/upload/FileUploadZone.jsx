import Papa from "papaparse";
import useVisualizerStore from "../../store/useVisualizerStore";

function FileUploadZone() {
  const setUploadedData = useVisualizerStore(
    (state) => state.setUploadedData
  );

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        setUploadedData(results.data);

        console.log(results.data);
      },
    });
  };

  return (
    <label
      className="
        mt-8
        flex
        h-[260px]
        w-full
        cursor-pointer
        items-center
        justify-center
        rounded-lg
        border
        border-dashed
        border-cyan-400/20
        bg-white/[0.03]
        transition-all
        duration-500
        hover:border-cyan-300/40
        hover:bg-cyan-300/[0.03]
        retro-scan
      "
    >

      <input
        type="file"
        accept=".csv"
        className="hidden"
        onChange={handleFileUpload}
      />

      <div className="text-center">

        <p className="text-lg tracking-[0.08em] text-cyan-100" style={{fontFamily: "VT323, 'Press Start 2P', monospace"}}>
          Drag & Drop CSV File
        </p>

        <p className="mt-4 text-sm text-slate-500" style={{fontFamily: "VT323, monospace"}}>
          or click to browse local storage
        </p>

      </div>

    </label>
  );
}

export default FileUploadZone;