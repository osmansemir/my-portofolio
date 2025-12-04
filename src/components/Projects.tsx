import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projectsData";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section
      className={cn(
        " relative z-30 flex flex-col w-full ",
        "px-5 py-10 sm:w-8/10 md:w-9/10 lg:w-7/10",
      )}
    >
      <SectionTitle>Projects</SectionTitle>
      <h2 className="text-3xl text-center font-bold tracking-tighter mb-10 sm:text-5xl">
        Check out my latest work
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((item) => (
          <ProjectCard key={item.title} project={item} />
        ))}
      </div>
    </section>
  );
}
