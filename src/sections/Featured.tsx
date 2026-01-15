import SectionWrapper from "../components/Sectionwrapper";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Featured() {
  const { scrollY } = useScroll();

  // Parallax movement
  const y = useTransform(scrollY, [400, 1200], [80, -80]);

  return (
    <SectionWrapper className="bg-white dark:bg-black text-black dark:text-white">
      
      {/* PARALLAX WRAPPER */}
      <motion.div style={{ y }} className="text-center">

        {/* ENTRANCE ANIMATION WRAPPER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            AI Roadmap Builder
          </h2>

          <p className="mt-4 text-black/50 dark:text-white/50 text-lg">
            A new way to visualize learning.
          </p>

          <div className="mt-20 flex justify-center">
            <motion.a
              href="https://github.com/yourname/roadmap-builder"
              target="_blank"
              className="block w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <div
                className="h-[520px] rounded-[40px] bg-gradient-to-b from-black/5 to-black/10 dark:from-white/10 dark:to-white/5 border border-black/10 dark:border-white/10 shadow-2xl flex items-center justify-center
                transition-all duration-500 ease-out hover:scale-[1.015]
                hover:shadow-[0_0_100px_rgba(255,255,255,0.2)] hover:border-white/30"
              >
                <span className="text-black/40 dark:text-white/40 text-sm">
                  Cinematic product preview will live here
                </span>
              </div>
            </motion.a>
          </div>

        </motion.div>
      </motion.div>

    </SectionWrapper>
  );
}
