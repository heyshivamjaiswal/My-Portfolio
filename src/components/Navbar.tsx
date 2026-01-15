import { motion, useScroll} from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
  }, [scrollY]);

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
        
        {/* Logo / Name */}
        <div className="font-semibold text-2xl tracking-tight text-black dark:text-white">
          Shivam
        </div>

        {/* Right Side */}
        <nav className="flex gap-8 text-sm text-black/70 dark:text-white/80">
          {["Projects", "Skills", "About", "Contact"].map((item) => (
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
      </div>
    </motion.header>
  );
}
