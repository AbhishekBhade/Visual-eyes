import { motion } from "framer-motion";

import useVisualizerStore from "../../store/useVisualizerStore";

import generateWordFrequency from "../../utils/generateWordFrequency";

import ObservatoryPanel from "../../components/layout/ObservatoryPanel";

import WordCloudView from "../../components/wordcloud/WordCloudView";
import InsightStats from "../../components/wordcloud/InsightStats";

function WordCloudSection() {
  const uploadedText = useVisualizerStore(
    (state) => state.uploadedText
  );

  if (!uploadedText.trim()) return null;

  const words = generateWordFrequency(uploadedText);

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 80,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      className="relative z-10 px-6 pb-24"
    >

      <ObservatoryPanel>

        <div className="max-w-6xl mx-auto px-6 py-12 sm:px-10 sm:py-16">

          {/* Header */}
          <div className="mb-12 text-center">

            <h2 className="text-3xl font-bold tracking-[0.14em] text-white">
              WORD CONSTELLATION
            </h2>

            <p className="mt-4 mx-auto max-w-2xl leading-[1.9] text-slate-400">
              Frequency patterns extracted from the uploaded signal.
            </p>

          </div>

          {/* Stats */}
          <InsightStats words={[...words]} />

          {/* Word Cloud */}
          <div className="mt-14">
            <WordCloudView words={words} />
          </div>

        </div>

      </ObservatoryPanel>

    </motion.section>
  );
}

export default WordCloudSection;