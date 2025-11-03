import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section className="relative text-white flex justify-center items-center px-5 pb-10 z-30">
      <div>
        <SectionTitle>About</SectionTitle>
        <div className="prose md:prose-lg md:text-center text-foreground-muted">
          <p className="">
            I’m Osman Semir, a self-taught full-stack web developer with a
            background in applied biology. I specialize in building efficient,
            user-friendly applications using the MERN stack (MongoDB, Express,
            React, and Node.js).
          </p>
          <p className="">
            My experience in research and teaching has strengthened my
            analytical thinking and problem-solving skills, which I now apply to
            creating clean, functional, and well-structured web projects. I’m
            passionate about continuous learning, improving my craft, and
            turning complex ideas into simple, elegant digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
