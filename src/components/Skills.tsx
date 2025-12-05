import SectionTitle from "@/components/SectionTitle";
import { Marquee } from "@/components/ui/Marquee";
import { skillsData1, skillsData2, skillsData3 } from "@/data/skillsData";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  icon?: React.ReactNode;
  skillColor?: string;
};

function Skill({ skill }: { skill: Skill }) {
  return (
    <div
      className={cn(
        "text-black bg-white min-w-20 align-middle flex item-center px-4 py-2 rounded-full border border-foreground dark:border-0 ",
        skill.skillColor,
      )}
    >
      <span className="pl-1 inline-block">{skill.icon}</span>
      <span className={` px-1 rounded-sm inline-block`}>{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="relative w-full">
      <SectionTitle>Skills and Teck Stack</SectionTitle>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:40s] overflow-x-hidden">
          {skillsData1.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:40s] overflow-hidden"
        >
          {skillsData2.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:40s] overflow-hidden">
          {skillsData3.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        {/* outer shadow */}
        {/* <div className="from-[#020617] pointer-events-none absolute inset-y-0 left-full w-5 bg-gradient-to-r"></div> */}
        {/* <div className="from-[#020617] pointer-events-none absolute inset-y-0 right-full w-5 bg-gradient-to-l"></div> */}
      </div>
    </section>
  );
}
