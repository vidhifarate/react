import sukumar from "../assets/sukumar-chougule.jpg";
import walchand from "../assets/walchand-chougle.jpg";

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <h3 className="section-heading">Our Leadership</h3>
      <hr />
      <div className="directors">
        <div className="director-card">
          <img src={sukumar} alt="Mr. Sukumar F. Chougule" />
          <h4>Mr. Sukumar F. Chougule</h4>
          <p><strong>Chairman</strong></p>
          <p> Chairman of SFC Infracon Pvt. Ltd. Sangli. Architect & Civil Engineer with over 40 years of experience.</p>
        </div>

        <div className="director-card">
          <img src={walchand} alt="Mr. Walchand S. Chougule" />
          <h4>Mr. Walchand S. Chougule</h4>
          <p><strong>Director</strong></p>
          <p>Director of SFC Infracon Pvt. Ltd. Sangli. Holds a B.Arch and MSc. in Construction Project Management from the UK.</p>
        </div>
      </div>
    </section>
  );
}
