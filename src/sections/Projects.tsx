import SectionWrapper from "../components/Sectionwrapper";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
        className="flex items-end justify-between mb-12"
      >
        <h2 className="text-4xl font-semibold tracking-tight">
          Other Projects
        </h2>
        <span className="text-sm text-black/50 dark:text-white/50">
          Selected work
        </span>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
        className="grid md:grid-cols-3 gap-8 items-stretch"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item} className="h-full">
            
            {/* HOVER CARD */}
            <motion.a
              href={project.live || project.github}
              target="_blank"
              className="group block h-full rounded-3xl border border-black/10 dark:border-white/10 
                bg-white dark:bg-white/5 p-6
                transition-all duration-300 ease-out
                hover:border-black/30 dark:hover:border-white/40
                hover:shadow-[0_30px_120px_rgba(0,0,0,0.4)]
                dark:hover:shadow-[0_0_80px_rgba(255,255,255,0.25)]
                [transform-style:preserve-3d]"
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="flex flex-col h-full justify-between [transform:translateZ(30px)]">
                <div>
                  <h3 className="text-xl font-semibold mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 text-sm text-black/40 dark:text-white/40">
                  {project.tech?.join(" • ")}
                </div>
              </div>
            </motion.a>

          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
