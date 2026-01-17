import { projects } from "../data/project";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p,i)=> <ProjectCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
}
