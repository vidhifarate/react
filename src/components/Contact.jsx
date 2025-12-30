export default function Contact() {
  return (
    <section id="contact" className="section">
      <center>
        <h2 className="section-heading">Contact Us</h2>
      </center>
      <hr />
      <div className="contact-container">
        <div className="contact-details">
          <p>
            <b>SFC INFRACON PVT. LTD.</b><br />
            C.S. No. 10103/2, ORIANA, GF 02,<br />
            Near Birnale Medical College, Neminath Nagar,<br />
            Sangli, Maharashtra 416416
          </p>
          <ul className="contact-list">
            <li><b>Phone:</b> +91 2333 550068</li>
            <li><b>Email:</b> <a href="mailto:sfc.infracon@gmail.com">sfc.infracon@gmail.com</a></li>
          </ul>
        </div>

        <div className="map-embed">
          <iframe
            title="SFC Infracon Location"
            src="https://www.google.com/maps?q=SFC+INFRACON+PVT.+LTD.,+ORIANA,+Sangli,+Maharashtra&output=embed"
            width="100%" height="260" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
}
