import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1 initial={{ y: 50, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{duration:0.8}} className="text-5xl md:text-6xl font-bold">
        Hi, I’m <span className="text-indigo-500">Mariana Amina</span>
      </motion.h1>
      <motion.p initial={{ y: 50, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{duration:1, delay:0.2}} className="mt-6 text-gray-400 text-lg">
        React Developer | Freelance Web Developer
      </motion.p>
      <motion.div initial={{ y:50, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{duration:1, delay:0.4}} className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700">View Projects</a>
        <a href="/Mariana_Amina_Resume 1.pdf" download className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800">Download CV</a>
      </motion.div>
    </section>
  );
}
