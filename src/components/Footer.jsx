import { Link } from "react-router-dom";
import logo from "../assets/SFC_Infra_Logo-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="footer-professional">
      <div className="footer-container">
        {/* Column 1: Brand & Bio */}
        <div className="footer-col brand-col">
          <img src={logo} alt="SFC Infracon" className="footer-logo" />
          <p className="footer-bio">
            Building excellence since 1985. A trusted partner in Maharashtra's 
            real estate and infrastructure development for over 40 years.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/SFC.INFRACON/"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/sfc.infracon/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#projects">Recent Projects</a></li>
            <li><a href="#about">About SFC</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li><i className="fas fa-map-marker-alt"></i> Sangli, Maharashtra 416416</li>
            <li><i className="fas fa-phone"></i> +91 2333 550068</li>
            <li><i className="fas fa-envelope"></i> sfc.infracon@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SFC Infracon Pvt. Ltd. All Rights Reserved.</p>
       
      </div>
    </footer>
  );
}