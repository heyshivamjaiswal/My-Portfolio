import { motion } from "framer-motion";
import AboutVisuals from "../components/AboutVisuals";


export default function About() {
  return (
    <section id="about" className="py-32 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="h-[440px] rounded-[36px] bg-gradient-to-br from-black/5 to-black/10 dark:from-white/10 dark:to-white/5 border border-black/10 dark:border-white/10 overflow-hidden
          transition-all duration-500 ease-out hover:scale-[1.02]
          hover:shadow-[0_0_80px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_80px_rgba(255,255,255,0.2)]"
        >
          <AboutVisuals />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-5xl font-semibold mb-8 tracking-tight text-black dark:text-white">
            About Me
          </h2>

<p className="text-black/70 dark:text-white/70 leading-relaxed mb-6 max-w-xl">
  I build web applications with a strong focus on SEO optimization, responsive design, and clean user experience.
  I like working on products where good UX, solid engineering, and practical problem solving come together.
</p>

<p className="text-black/70 dark:text-white/70 leading-relaxed max-w-xl">
  Lately, I've been working more on backend development — building APIs, working with databases, and improving application logic.
  Alongside this, I'm also learning data structures and algorithms to write better, more efficient, and more reliable systems.
</p>
        </motion.div>

      </div>
    </section>
  );
}
