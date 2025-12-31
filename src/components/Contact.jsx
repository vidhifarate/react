import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Note: To make this functional, replace 'your-unique-id' with your actual Formspree ID
  const formActionUrl = "https://formspree.io/f/xnjnaqga";

  return (
    <section id="contact" className="section pop-up-scroll">
      <h2 className="section-heading">contact</h2>
      <hr />
      <p className="center" style={{ textAlign: 'center', marginBottom: '30px' }}>
        Connect with our expert team to bring your infrastructure or real estate vision to life.
      </p>

      <div className="contact-container">
        {/* Left Side: Professional Contact Details */}
        <div className="contact-details">
          <h3>SFC INFRACON PVT. LTD.</h3>
          <p>
            <b>Head Office:</b><br />
            C.S. No. 10103/2, ORIANA, GF 02,<br />
            Near Birnale Medical College, Neminath Nagar,<br />
            Sangli, Maharashtra 416416
          </p>
          
          <ul className="contact-list">
            <li><i className="fas fa-phone"></i> <b>Phone:</b> +91 2333 550068</li>
            <li><i className="fas fa-envelope"></i> <b>Email:</b> sfc.infracon@gmail.com</li>
          </ul>

          <div className="map-embed" style={{ marginTop: '20px' }}>
         
<iframe
  title="SFC Infracon Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15274.223185762048!2d74.56961518438989!3d16.848378712779983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc118795cc5d68d%3A0xaecfe74f14c70113!2sSFC%20Infracon%20Private%20Limited!5e0!3m2!1sen!2sin!4v1767178361456!5m2!1sen!2sin"
  width="100%"
  height="240"
  style={{ border: 0, borderRadius: "12px" }}
  allowFullScreen
  loading="lazy"
/>

          </div>
        </div>

        {/* Right Side: Lead Generation Form */}
        <form action={formActionUrl} method="POST" className="contact-form">
          {/* Hidden field for Email Subject in the Owner's inbox */}
          <input type="hidden" name="_subject" value="New Project Inquiry - SFC Infracon" />
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              required 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your full name" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              required 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="email@example.com" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone"
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="+91 XXXXX XXXXX" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="projectType">Project Interest</label>
            <select 
              id="projectType"
              name="projectType" 
              value={formData.projectType} 
              onChange={handleChange}
            >
              <option value="Residential">Residential Development</option>
              <option value="Commercial">Commercial Complex</option>
              <option value="Infrastructure">Public Infrastructure</option>
              <option value="Consultation">Technical Consultation</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Brief</label>
            <textarea 
              id="message"
              name="message" 
              rows="4" 
              required 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Describe your requirements..."
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Send Inquiry 
          </button>
        </form>
      </div>
    </section>
  );
}