import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-logo">ReelsOnGo</h3>
              <p className="footer-tagline">
                We Shoot • Edit • Deliver<br />Reels in 10 Minutes
              </p>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Professional Shooting</a></li>
                <li><a href="#services">Advanced Editing</a></li>
                <li><a href="#services">Creative Direction</a></li>
                <li><a href="#services">Brand Collaborations</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#home">About Us</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <Phone size={18} />
                  <a href="tel:+917416167851">+91 74161 67851</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:info@reelsongo.com">info@reelsongo.com</a>
                </li>
                <li>
                  <MapPin size={18} />
                  <span>India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} ReelsOnGo. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <span>•</span>
              <a href="#terms">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
