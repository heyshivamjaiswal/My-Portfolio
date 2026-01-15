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

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="text-4xl font-semibold mb-12 tracking-tight"
        >
          Skills & Stack
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          className="grid md:grid-cols-3 gap-10"
        >
          {[
            { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
            { title: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase"] },
            { title: "Core", items: ["Data Structures & Algorithms", "Object Oriented Programming"] },
          ].map((block) => (
            <motion.div key={block.title} variants={item}>
              {/* Card */}
              <div
                className="h-[260px] rounded-3xl border border-black/10 dark:border-white/10 p-8 bg-black/5 dark:bg-white/5
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-[1.02]
                  hover:border-black/30 dark:hover:border-white/40
                  hover:shadow-[0_0_60px_rgba(255,255,255,0.18)]
                  flex flex-col"
              >
                <h3 className="text-lg mb-4 text-black/80 dark:text-white/80">
                  {block.title}
                </h3>

                {/* Scrollable list */}
                <ul className="space-y-2 text-black/60 dark:text-white/60 overflow-auto pr-1">
                  {block.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
