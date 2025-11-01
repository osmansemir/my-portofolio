import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Spotlight } from "@/components/ui/Spotlight";
import MyDock from "./components/Mydock";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#020617] relative">
        {/* Magenta Orb Grid Background */}
        <div className="absolute inset-0 z-0 custom-gradient" />
        {/* Your Content/Components */}
        <div className="absolute inset-0 overflow-hidden">
          <Spotlight
            className="-top-30 z-100 left-0 md:-top-50 md:left-30"
            fill="white"
          />
        </div>
        <main className="relative max-w-xl mx-auto pb-3 px-5">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <MyDock />
        </main>
      </div>
    </>
  );
}

export default App;
