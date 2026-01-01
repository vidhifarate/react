import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  //  Google Apps Script Web App URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxWghykv46no1cxWzC7jKgWXLiQhGyB3JQg6X_N1xhma08Vv0T_kJtM0FLrIkkYI1wv/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;

    fetch(SCRIPT_URL, {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
        form.reset();

        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setIsSubmitting(false);
        alert("Submission failed. Please try again.");
      });
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-heading">Work With Us</h2>
      <hr />

      <div className="contact-container">

        {/* LEFT SIDE – CONTACT DETAILS */}
        <div className="contact-details">
          <h3>SFC INFRACON PVT. LTD.</h3>
          <p>
            <b>Head Office:</b><br />
            C.S. No. 10103/2, ORIANA, GF 02,<br />
            Sangli, Maharashtra 416416
          </p>

          <ul className="contact-list">
            <li><i className="fas fa-phone"></i> <b>Phone:</b> +91 2333 550068</li>
            <li><i className="fas fa-envelope"></i> <b>Email:</b> sfc.infracon@gmail.com</li>
          </ul>

          <div className="map-embed" style={{ marginTop: "20px" }}>
            <iframe
              title="SFC Infracon Location"
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE – CUSTOM FORM */}
        <div className="form-wrapper" style={{ position: "relative" }}>
          <form
            className={`contact-form ${isSuccess ? "form-fade" : ""}`}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="email@example.com"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div className="form-group">
              <label>Project Type</label>
              <select name="projectType">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Infrastructure</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="How can we assist you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>

          {/* SUCCESS POPUP */}
          {isSuccess && (
            <div className="success-overlay">
              <div className="success-card">
                <div className="success-icon">✓</div>
                <h3>Inquiry Received!</h3>
                <p>
                  Thank you for contacting SFC Infracon.
                  We will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-close-msg"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
