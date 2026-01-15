import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Title + Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Let’s build something great.
          </h2>

          <p className="text-black/60 dark:text-white/60 mb-12 text-lg">
            If you want to work together or just have a chat, feel free to reach out.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ amount: 0.3 }}
        >
          <a
            href="mailto:heyshivamjaiswal@gmail.com"
            className="px-10 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm
              transition-all duration-300 ease-out hover:scale-[1.05]
              hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]"
          >
            Email Me
          </a>

          <a
            href="https://github.com/heyshivamjaiswal"
            target="_blank"
            className="px-10 py-4 rounded-full border border-black/30 dark:border-white/30 text-sm
              transition-all duration-300 ease-out hover:scale-[1.05]
              hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:border-white/50"
          >
            GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}
