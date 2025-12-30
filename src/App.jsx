import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const location = useLocation();

  useEffect(() => {
    // when URL has a hash (e.g. /#services), scroll to the element with that id
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const scrollToElement = (el) => {
        const yOffset = -70; // adjust for sticky navbar height
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      };

      const el = document.getElementById(id);
      if (el) {
        scrollToElement(el);
      } else {
        // element might not be in DOM yet after route change; try shortly after
        setTimeout(() => {
          const el2 = document.getElementById(id);
          if (el2) scrollToElement(el2);
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
