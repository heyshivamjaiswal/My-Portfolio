import { FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-black/10 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm text-black/70">
              © {new Date().getFullYear()} Shivam Jaiswal. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-black/50">
              Built with React, Tailwind & unhealthy obsession with perfection.
            </p>
          </div>

          {/* Right - Social Icons */}
          <div className="flex gap-6 text-xl text-black/60">
            <a
              href="https://leetcode.com/u/zezzy/"
              target="_blank"
              className="transition-all duration-300 hover:scale-110 hover:text-black"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://www.linkedin.com/in/shivamjaiswal1/"
              target="_blank"
              className="transition-all duration-300 hover:scale-110 hover:text-black"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:heyshivamjaiswal@gmail.com"
              target="_blank"
              className="transition-all duration-300 hover:scale-110 hover:text-black"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom Credit */}
        <div className="mt-8 pt-4 border-t border-black/10 text-center">
          <p className="text-xs text-black/40 flex items-center justify-center gap-2">
            Made by Shivam Jaiswal with <FaHeart className="text-red-500" /> love & passion
          </p>
        </div>

      </div>
    </footer>
  );
}
