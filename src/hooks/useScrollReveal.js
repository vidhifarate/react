import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "h1, h2, h3, p, li"
    );

    elements.forEach(el => el.classList.add("pop-up-scroll"));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
