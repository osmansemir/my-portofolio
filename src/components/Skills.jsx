import SectionTitle from "@/components/SectionTitle";
import { Marquee } from "@/components/ui/Marquee";
import { skillsData } from "@/data/skillsData";

function Skill({ skill }) {
  return (
    <div
      className={
        "text-black bg-white min-w-30 align-middle flex item-center px-3 py-2 rounded-lg "
      }
    >
      <span className="px-1 inline-block">{skill.icon}</span>
      <span className={`bg-${skill.color} px-1 rounded-sm inline-block`}>
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="relative w-full">
      <SectionTitle>Skills and Teck Stack</SectionTitle>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:40s] overflow-x-hidden">
          {skillsData.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:40s] overflow-hidden"
        >
          {skillsData.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:40s] overflow-hidden">
          {skillsData.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        {/* outer shadow */}
        {/* <div className="from-[#020617] pointer-events-none absolute inset-y-0 left-full w-5 bg-gradient-to-r"></div> */}
        {/* <div className="from-[#020617] pointer-events-none absolute inset-y-0 right-full w-5 bg-gradient-to-l"></div> */}
      </div>
    </section>
  );
}
