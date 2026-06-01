import AtmosphereBackground from "./components/layout/AtmosphereBackground";
import FloatingWords from "./components/layout/FloatingWords";

import HeroSection from "./sections/hero/HeroSection";
import InputGateway from "./sections/explorer/InputGateway";
import WordCloudSection from "./sections/explorer/WordCloudSection";
import VisualizationSection from "./sections/explorer/VisualizationSection";

import useVisualizerStore from "./store/useVisualizerStore";

function App() {
  const entered = useVisualizerStore((state) => state.entered);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">

      <AtmosphereBackground />

      <FloatingWords />

      {!entered ? (
        <HeroSection />
      ) : (
        <>
          <InputGateway />

          <WordCloudSection />

          <VisualizationSection />
        </>
      )}

    </main>
  );
}

export default App;