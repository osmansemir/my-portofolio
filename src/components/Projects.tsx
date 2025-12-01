import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projectsData";

export default function Projects() {
  return (
    <section className=" relative max-sm:px-5 py-10 z-30 flex flex-col w-7/10">
      <SectionTitle>Projects</SectionTitle>
      <h2 className="text-3xl text-center font-bold tracking-tighter mb-10 sm:text-5xl">
        Check out my latest work
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((item) => (
          <ProjectCard key={item.title} project={item} />
        ))}
      </div>
    </section>
  );
}
