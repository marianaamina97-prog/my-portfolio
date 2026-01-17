import { motion } from "framer-motion";
import { services } from "../data/service";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s,i) => (
            <motion.div key={i} whileHover={{scale:1.05}} className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-indigo-600 transition">
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
