import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <motion.div
      className="bg-white text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar />

      <main>
        <Hero />
        <Featured />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;
