import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import MyDock from "../components/Mydock";
import Contact from "../components/Contact";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main
      role="main"
      className="relative w-full pb-3 flex flex-col items-center"
    >
      <ModeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <MyDock />
    </main>
  );
}
