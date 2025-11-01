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

function Skills() {
  return (
    <section className="w-full">
      <SectionTitle>Skills and Teck Stack</SectionTitle>
      <div>
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
      </div>
    </section>
  );
}
export default Skills;
