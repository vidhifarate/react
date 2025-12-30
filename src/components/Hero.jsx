import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-image-wrap">
        <img src={heroImg} alt="SFC Infra: Modern Construction" className="hero-image" loading="lazy" />
      </div>
      <div className="hero-content-wrapper">
        <div className="hero-content glass-effect">
          <p className="tagline">A Trusted Partner in Real Estate, Infrastructure and Community Development</p>
          <p className="subtitle">Serving Maharashtra &amp; Western India with innovation, quality and reliability for over <strong>40</strong> years.</p>
        </div>
      </div>
    </section>
  );
}
