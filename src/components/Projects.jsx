import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <section className="text-white relative py-10 z-30 flex flex-col">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
