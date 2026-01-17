import { motion } from "framer-motion";

const skills = ["React","JavaScript","Tailwind","REST APIs","Git & GitHub","Vite","Framer Motion"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div key={i} whileHover={{scale:1.05}} className="bg-gray-800 p-4 rounded-xl text-center">
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
