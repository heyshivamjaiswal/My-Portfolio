import { useEffect, useState } from "react";
import SectionWrapper from "../components/Sectionwrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "../data/projects";

//Shuffle helper
function shuffleArray<T>(array: T[]) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function FeaturedFramed() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [400, 1200], [80, -80]);

  const [shuffled, setShuffled] = useState(() => shuffleArray(projects));
  const [index, setIndex] = useState(0);

  const currentProject = shuffled[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        if (next >= shuffled.length) {
          setShuffled(shuffleArray(projects));
          return 0;
        }
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [shuffled.length]);

  if (!currentProject) return null;

  return (
    <SectionWrapper className="bg-black text-white">
      <motion.div style={{ y }} className="text-center">

        <motion.div
          key={currentProject.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          <div className="mb-4">
            <span className="text-xs tracking-[0.35em] uppercase text-white/40">
              Project Preview
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            {currentProject.title}
          </h2>

          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            {currentProject.description}
          </p>

          <div className="mt-28 flex justify-center">
            <motion.a
              href={currentProject.live}
              target="_blank"
              className="block w-full max-w-6xl group"
            >
              {/*Glow Wrapper */}
              <div className="relative">

                {/*White Glow */}
                <div
                  className="absolute -inset-10 rounded-[80px] blur-[100px]
                  bg-white/40
                  opacity-80
                  transition-all duration-700
                  group-hover:opacity-100"
                />

                {/*Outer Frame */}
                <div
                  className="relative h-[640px] rounded-[60px]
                  bg-[#050505]
                  border border-white/20
                  shadow-[0_0_80px_rgba(255,255,255,0.25)]
                  overflow-hidden
                  transition-all duration-700
                  group-hover:shadow-[0_0_160px_rgba(255,255,255,0.5)]"
                >
                  {/* Frame Padding */}
                  <div className="relative w-full h-full px-20 py-24">

                    {/* Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.95)_100%)] pointer-events-none" />

                    {/*Inner Screen */}
                    <div
                      className="relative w-full h-full rounded-[36px]
                      bg-[#0b0b0b]
                      border border-white/10
                      shadow-[0_0_40px_rgba(0,0,0,1)]
                      flex items-center justify-center"
                    >
                      <div className="w-full h-full p-12">
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </motion.a>
          </div>

        </motion.div>

      </motion.div>
    </SectionWrapper>
  );
}
