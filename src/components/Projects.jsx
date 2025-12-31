import { useEffect, useRef, useState } from "react";
import img1 from "../assets/SFC MALL.jpg";
import img2 from "../assets/mall2.jpg";
import img3 from "../assets/A-03-8X12.jpg";
import img4 from "../assets/Cam_01.jpg";
import img5 from "../assets/D-03.jpg";
import img6 from "../assets/DAY_01.jpg";
import img7 from "../assets/NIGHT.jpg";

export default function ProjectsCarousel() {
  const slides = [img1, img2, img3, img4, img5, img6, img7];
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);
  const imagesRef = useRef([]);
  const progressRefs = useRef([]);
  const timerRef = useRef(null);
  const TICK = 16; // ms (smooth updates)
  const TIMEOUT = 2500; // autoplay per slide (1 second)
  const WIDTH_PIXELS = 50; // progress target

  const selectImage = (index = current) => {
    const carousel = carouselRef.current;
    const selected = imagesRef.current[index];
    if (!carousel || !selected) return;

    const imageCenter = selected.offsetLeft + selected.offsetWidth / 2;
    const windowCenter = window.innerWidth / 2;
    const diff = windowCenter - imageCenter;
    carousel.style.transform = `translateX(${diff}px) translateZ(0px)`;
  };

  const resetProgress = (i) => {
    const prog = progressRefs.current[i];
    if (prog) prog.style.width = "8px";
  };

  const startPlayer = (idx = current) => {
    clearInterval(timerRef.current);
    let currentTime = 10;
    const progressBar = progressRefs.current[idx];

    timerRef.current = setInterval(() => {
      const widthRatio = currentTime / TIMEOUT;
      const currentWidth = WIDTH_PIXELS * widthRatio;
      if (progressBar) progressBar.style.width = `${currentWidth}px`;
      currentTime += TICK;
      if (widthRatio >= 1.0) {
        // advance
        startNext();
      }
    }, TICK);
  };

  const startNext = (index = null) => {
    clearInterval(timerRef.current);
    const currDot = progressRefs.current.find((_, i) => i === current);
    if (currDot) currDot.style.width = "8px";

    let nextIndex;
    if (index !== null) {
      nextIndex = index;
    } else {
      nextIndex = (current + 1) % slides.length;
    }

    setCurrent(nextIndex);
  };

  useEffect(() => {
    // highlight images (opacity/blur handled via inline styles) and center
    imagesRef.current.forEach((img, i) => {
      if (!img) return;
      img.style.opacity = i === current ? 1 : 0.5;
      img.style.filter = `blur(${i === current ? 0 : 4}px)`;
    });

    // reset previous progress bar and start player for new current
    progressRefs.current.forEach((p, i) => {
      if (p && i !== current) p.style.width = "8px";
    });

    // slight timeout to allow DOM layout
    setTimeout(() => selectImage(current), 40);
    startPlayer(current);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  useEffect(() => {
    // keyboard navigation + resize
    const onKey = (e) => {
      if (e.key === "ArrowLeft") startNext((current - 1 + slides.length) % slides.length);
      if (e.key === "ArrowRight") startNext((current + 1) % slides.length);
    };
    const onResize = () => selectImage(current);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <main className="section">
      <section id="projects" className="projects-section">
        <h2 className="section-heading">Our Projects</h2>
        <hr />

        <div id="__main">
          <div className="image-carousel" ref={carouselRef}>
            {slides.map((src, i) => (
              <div className="image-wrap" key={i} ref={(el) => (imagesRef.current[i] = el)}>
                <img src={src} alt={`Project ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="autoplayer-group">
            <div className="autoplayer-main">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`autoplayer-dot ${current === i ? "selected" : ""}`}
                  onClick={() => startNext(i)}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <div
                    ref={(el) => (progressRefs.current[i] = el)}
                    className="autoplayer-progress"
                    style={{ width: "8px" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
