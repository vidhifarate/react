import { useScrollReveal } from "../hooks/useScrollReveal";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  useScrollReveal();
  return <Projects />;
}
