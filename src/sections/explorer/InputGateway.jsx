import { motion } from "framer-motion";

import ObservatoryPanel from "../../components/layout/ObservatoryPanel";

import FileUploadZone from "../../components/upload/FileUploadZone";
import TextInputPanel from "../../components/upload/TextInputPanel";

function InputGateway() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">

      <ObservatoryPanel>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex w-full max-w-5xl mx-auto flex-col items-center px-6 py-16 text-center sm:px-10 sm:py-20"
        >

          <h2
            className="
              text-4xl
              font-bold
              tracking-[0.18em]
              text-white
            "
          >
            DATA INTAKE
          </h2>

          <p className="mt-4 max-w-2xl leading-[1.9] text-slate-400">
            Upload structured datasets or paste raw text to begin visual exploration.
          </p>

          <div className="w-full max-w-3xl mt-8">
            <FileUploadZone />
            <TextInputPanel />
          </div>

        </motion.div>

      </ObservatoryPanel>

    </section>
  );
}

export default InputGateway;