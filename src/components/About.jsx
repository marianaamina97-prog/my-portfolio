import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";

export default function About() {
  return (
    <section id="about" className="py-12 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <motion.img initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} src={profile} alt="Profile" className="w-48 rounded-full"/>
      <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} className="flex-1">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-7">
          I am an intermediate React developer with real-world experience
          building responsive, high-performance web applications for clients
          and startups. I specialize in React, Tailwind CSS, REST APIs, and
          modern frontend workflows.
        </p>
      </motion.div>
    </section>
  );
}
