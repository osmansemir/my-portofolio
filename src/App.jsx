import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Spotlight } from "@/components/ui/Spotlight";
import MyDock from "./components/Mydock";
import Contact from "./components/Contact";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Initialize Google Analytics once when app loads
    ReactGA.initialize("G-H5F1B6HNVS");

    // Track page views automatically
    ReactGA.send("pageview");
  }, []);

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
        <main className="relative text-foreground max-w-2xl mx-auto pb-3 px-5">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <MyDock />
        </main>
      </div>
    </>
  );
}

export default App;
