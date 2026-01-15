import HeroScene from "../components/HeroScene";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const yLeft = useTransform(scrollY, [0, 600], [0, -60]);
  const yRight = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section className="min-h-screen flex items-center pt-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div style={{ y: yLeft }}>
          <p className="text-sm uppercase tracking-widest text-white/40 mb-6">
            Full-stack Developer
          </p>

          <h1 className="text-6xl md:text-7xl font-semibold leading-[1.03] tracking-tight">
            Building calm, <br />
            powerful <span className="text-white/40">web products</span>
          </h1>

<p className="mt-8 text-xl md:text-2xl text-white/75 leading-relaxed max-w-2xl">
  I'm a full-stack developer who enjoys building reliable and scalable web applications.
  I focus on clean code, good structure, and making sure everything works well together.
</p>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="px-10 py-4 rounded-full bg-white text-black text-sm
              transition-all duration-300 ease-out hover:scale-[1.05] active:scale-[0.97]
              hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
            >
              View Work
            </a>

            <a
              href="https://github.com/heyshivamjaiswal"
              target="_blank"
              className="px-10 py-4 rounded-full border border-white/20 text-sm
              transition-all duration-300 ease-out hover:scale-[1.05] active:scale-[0.97]
              hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] hover:border-white/50"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          style={{ y: yRight }}
          className="h-[440px] rounded-[36px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden
          transition-all duration-500 ease-out hover:scale-[1.02]
          hover:shadow-[0_0_80px_rgba(255,255,255,0.25)] hover:border-white/30"
        >
          <HeroScene />
        </motion.div>

      </div>
    </section>
  );
}
