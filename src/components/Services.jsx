import mall from "../assets/SFC MALL.jpg";
import oriana from "../assets/A-03-8X12.jpg";
import centurion from "../assets/Cam_01.jpg";
import aarna from "../assets/D-03.jpg";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="services" className="section">
      <h3 className="section-heading">Our Services</h3>
      <hr />
      <p>
        Delivering a wide spectrum from real estate to green infrastructure in Maharashtra and beyond.
      </p>

      <div className="services-timeline">
        <div className="service-step">
          <div className="service-icon"><i className="fas fa-building"></i></div>
          <div className="service-content">
            <h4>Residential</h4>
            <ul>
              <li>Sangli’s premium homes</li>
              <li>AARNA</li>
              <li>ORIANA</li>
            </ul>
          </div>
        </div>

        <div className="service-step">
          <div className="service-icon"><i className="fas fa-store"></i></div>
          <div className="service-content">
            <h4>Commercial &amp; Retail</h4>
            <ul>
              <li>SFC Megaa Mall, Sangli</li>
              <li>Shopping Centres &amp; Super Market Complex</li>
            </ul>
          </div>
        </div>

        <div className="service-step">
          <div className="service-icon"><i className="fas fa-city"></i></div>
          <div className="service-content">
            <h4>City &amp; Urban Infrastructure</h4>
            <ul>
              <li>Sangli, Miraj &amp; Kupwad Corporation office</li>
              <li>Storm water drains, city libraries, stadium galleries, road networks (200+ km)</li>
            </ul>
          </div>
        </div>

        <div className="service-step">
          <div className="service-icon"><i className="fas fa-leaf"></i></div>
          <div className="service-content">
            <h4>Green &amp; Sustainable Projects</h4>
            <ul>
              <li>Rainwater harvesting &amp; solar power at SFC Megaa Mall</li>
              <li>Sustainable, eco-friendly and modern designs in all major projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
