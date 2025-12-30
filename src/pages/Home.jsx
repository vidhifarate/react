import { useScrollReveal } from "../hooks/useScrollReveal";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import About from "../components/About";
import Values from "../components/Values";
import Leadership from "../components/Leadership";
import Contact from "../components/Contact";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Values />
      <Leadership />
      <Contact />
    </main>
  );
}
