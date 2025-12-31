export default function About() {
  return (
    <section id="about" className="section">
      <center>
        <h3 className="section-heading">ABOUT US</h3>
      </center>
      <hr />

      <div className="vision-mission-wrapper">
        <div className="vision-card">
          <div className="vision-icon"><i className="fas fa-eye"></i></div>
          <h2 style={{ color: "#181f2a" }}>OUR VISION</h2>
          <hr />
          <p>To set the benchmark for quality, reliability and leadership in construction</p>
        </div>

        <div className="mission-card">
          <div className="mission-icon"><i className="fas fa-bullseye"></i></div>
          <h2 style={{ color: "#181f2a" }}>OUR MISSION</h2>
          <hr />
          <p>
            To deliver high-quality, cost-effective projects on time while building lasting client
            relationships through integrity, performance and value.
          </p>
        </div>
      </div>

      <div className="about-section-styled">
        <div className="about-item">
          <div className="about-line"></div>
          <div className="about-content">
            <p>
              “The Firm, initially started as a proprietorship under the name
              <strong><em> Mr. Sukumar F. Chougule</em></strong>, later developed into a partnership firm as
              <strong> M/s. S. F. Chougule </strong>, and today we are
              <strong><u> SFC INFRACON PVT. LTD.</u></strong>.”
            </p>
          </div>
        </div>

        <div className="about-item">
          <div className="about-line"></div>
          <div className="about-content">
            <p>
              “With over 40 years of experience we are known in the industry as being competitive and dedicated
              to our passion for completing our projects on time, under budget and to a high standard of quality.”
            </p>
          </div>
        </div>

        <div className="about-item">
          <div className="about-line"></div>
          <div className="about-content">
            <p>“Established in 1985, SFC INFRACON is one of the leading construction companies in Maharashtra.”</p>
          </div>
        </div>

        <div className="about-item">
          <div className="about-line"></div>
          <div className="about-content">
            <p>
              “<strong>SFC INFRACON</strong> has successfully completed a <strong> wide range of  projects</strong> with an
              extensive experience of more than <strong> 40 years</strong>.”
            </p>
          </div>
        </div>

        <div className="about-item">
          <div className="about-line"></div>
          <div className="about-content">
            <p>
              “We have built a strong image of trust, excellence, commitment and customer satisfaction.
              <br />
              We strive hard to add value to every square foot that we build.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
