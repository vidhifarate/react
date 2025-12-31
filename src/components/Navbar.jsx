import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/SFC Infra Logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);
  return (
    <nav>
      
        <div className="nav-container">
        {/* Logo wrapped in a link to the Home/Hero section */}
        <div className="logo">
          <a href="#home" aria-label="Go to home section">
            <img src={logo} alt="SFC Infracon Logo" />
          </a>
        </div>

        <button className="menu-toggle" id="mobile-menu" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          <i className="fas fa-bars"></i>
        </button>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <Link to="/#services">Our Services</Link>
          </li>
          <li>
            <Link to="/#projects">Our Projects</Link>
          </li>
          <li>
            <Link to="/#about">About Us</Link>
          </li>
          <li>
            <Link to="/#values">Core Values</Link>
          </li>
          <li>
            <Link to="/#leadership">Leadership</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
