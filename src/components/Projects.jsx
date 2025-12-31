import { useEffect, useRef, useState } from "react";

import img1 from "../assets/SFC MALL.jpg";
import img2 from "../assets/mall2.jpg";
import img3 from "../assets/A-03-8X12.jpg";
import img4 from "../assets/Cam_01.jpg";
import img5 from "../assets/D-03.jpg";
import img6 from "../assets/DAY_01.jpg";
import img7 from "../assets/NIGHT.jpg";

export default function ProjectsCarousel() {
  const slides = [
    { img: img1, title: "SFC Mall", location: "SFC Mega Mall" },
    { img: img2, title: "Commercial Complex", location: "" },
    { img: img3, title: "Premium Residency", location: "" },
    { img: img4, title: "Urban Infrastructure", location: "" },
    { img: img5, title: "Corporate Hub", location: "" },
    { img: img6, title: "Daylight Project", location: "" },
    { img: img7, title: "Skyline Towers", location: "" },
  ];

  const [current, setCurrent] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null); // 🔹 Lightbox state
  const carouselRef = useRef(null);
  const TIMEOUT = 3000;

  // Center active slide
  const centerSlide = (index) => {
    if (!carouselRef.current) return;

    const items = carouselRef.current.children;
    if (!items[index]) return;

    const selected = items[index];
    const imageCenter = selected.offsetLeft + selected.offsetWidth / 2;
    const windowCenter = window.innerWidth / 2;

    carouselRef.current.style.transform = `translateX(${windowCenter - imageCenter}px)`;
  };

  useEffect(() => {
    centerSlide(current);

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, TIMEOUT);

    return () => clearInterval(timer);
  }, [current, slides.length]);

  return (
    <>
      <section id="projects" className="projects-section-modern">
        <div className="section-header">
          <h2 className="section-heading">Our Projects</h2>
          <hr className="short-hr" />
        </div>

        <div className="carousel-viewport">
          <div className="carousel-track" ref={carouselRef}>
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`slide-item ${current === i ? "active" : ""}`}
                onClick={() => setSelectedImg(slide.img)}
                style={{ cursor: "zoom-in" }}
              >
                <div className="project-card">
                  <img src={slide.img} alt={slide.title} loading="lazy" />
                  <div className="project-info">
                    <h3>{slide.title}</h3>
                    <p>{slide.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="carousel-nav">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`nav-dot ${current === i ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            >
              <div
                className="progress-fill"
                style={{
                  width: current === i ? "100%" : "0%",
                  transition:
                    current === i ? `width ${TIMEOUT}ms linear` : "none",
                }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* 🔹 FULL SCREEN LIGHTBOX */}
      {selectedImg && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="close-lightbox"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>

          <img
            src={selectedImg}
            alt="Project Full View"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
