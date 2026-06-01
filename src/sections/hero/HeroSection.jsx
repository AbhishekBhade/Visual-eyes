import { motion } from "framer-motion";
import ObservatoryPanel from "../../components/layout/ObservatoryPanel";
import EnterButton from "../../components/ui/EnterButton";

function HeroSection() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6">

      <ObservatoryPanel>

        <div className="flex w-full max-w-6xl mx-auto flex-col items-center px-6 py-28 text-center sm:px-10 sm:py-32">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
              text-6xl
              font-black
              tracking-[0.28em]
              text-white
              md:text-8xl
            "
          >
            VISUAL-EYES
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1.2,
            }}
            className="mt-12 max-w-3xl"
          >
            <p
              className="
                text-lg
                leading-[2]
                tracking-[0.03em]
                text-slate-400
                md:text-xl
              "
            >
              Transform information into immersive visual understanding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 1,
            }}
            className="mt-20"
          >
            <EnterButton />
          </motion.div>

        </div>

      </ObservatoryPanel>

    </section>
  );
}

export default HeroSection;