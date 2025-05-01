'use client';

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="text-center py-20 px-6 max-w-4xl mx-auto" id="home">
      {/* Typing h1 */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 text-purple-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typewriter
          words={["Hi, I'm Gelosu — Developer & Creative Technologist"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </motion.h1>

      {/* Fade-in h2 */}
      <motion.h2
        className="text-xl md:text-2xl mb-6 text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Building tools to empower communities, boost productivity, and bring joy through games.
      </motion.h2>

      {/* Fade-in p */}
      <motion.p
        className="text-gray-400 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        Welcome to my digital playground — explore my projects across web, desktop, and game development.
      </motion.p>
    </section>
  );
}
