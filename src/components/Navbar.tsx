import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
  }, [scrollY]);

  const links = ["Projects", "Skills", "About", "Contact"];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-300
        ${scrolled 
          ? "bg-white/70 dark:bg-black/70 shadow-lg" 
          : "bg-white/40 dark:bg-black/40"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="font-semibold text-xl tracking-tight text-black dark:text-white">
          Shivam
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8 text-sm text-black/70 dark:text-white/80">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative transition-colors hover:text-black dark:hover:text-white
                  after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-black dark:after:bg-white after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Resume Button */}
          <a
            href="#"
            className="ml-4 px-4 py-2 rounded-full border border-black/20 dark:border-white/20
            text-sm text-black dark:text-white
            hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
            transition-all"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-[2px] bg-black dark:bg-white" />
          <span className="w-6 h-[2px] bg-black dark:bg-white" />
          <span className="w-6 h-[2px] bg-black dark:bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-black/10 dark:border-white/10
            bg-white/80 dark:bg-black/80 backdrop-blur-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-lg text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white"
                >
                  {item}
                </a>
              ))}

              {/* Resume Button */}
              <a
                href="#"
                className="mt-4 inline-flex justify-center px-4 py-3 rounded-full border border-black/20 dark:border-white/20
                text-black dark:text-white
                hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                transition-all"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
