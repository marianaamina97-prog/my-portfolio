import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{scale:1.05}} className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-indigo-600 transition">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <div className="flex gap-2 mt-4 flex-wrap">
        {project.tech.map((t,i)=> <span key={i} className="text-sm bg-gray-800 px-3 py-1 rounded-full">{t}</span>)}
      </div>
      <div className="mt-6 flex gap-4">
        <a href={project.github} target="_blank" className="text-indigo-400">GitHub</a>
        <a href={project.live} target="_blank" className="text-indigo-400">Live Demo</a>
      </div>
    </motion.div>
  );
}
