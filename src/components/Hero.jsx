import heroImg from "../assets/hero-new.png";

export default function Hero() {
  return (
    <section id="home" className="hero-fullscreen">
      <div className="hero-bg-container">
        <img src={heroImg} alt="SFC Infra Background" className="hero-image-bg" />
        <div className="hero-light-overlay"></div>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-text-block">
          <span className="hero-eyebrow">Established 1985</span>
          <h1 className="hero-title">Building Excellence </h1>
          <p className="hero-desc">
            Serving Western India with innovation and reliability for over <strong>40</strong> years.
          </p>
          <div className="hero-button-group">
            <a href="#projects" className="btn-main">View Projects</a>
            <a href="#contact" className="btn-link">Contact Us →</a>
          </div>
        </div>
      </div>
    </section>
  );
}