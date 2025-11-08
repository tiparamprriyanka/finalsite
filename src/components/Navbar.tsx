// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="container">
//         <div className="nav-content">
//           <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//             ReelsOnGo
//           </div>

//           <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
//             <a onClick={() => scrollToSection('home')}>Home</a>
//             <a onClick={() => scrollToSection('pricing')}>Pricing</a>
//             <a onClick={() => scrollToSection('testimonials')}>Testimonials</a>
//             <a onClick={() => scrollToSection('services')}>Services</a>
//           </div>

//           <div className="nav-actions">
//             <button
//               className="btn-primary"
//               onClick={() => scrollToSection('contact')}
//             >
//               Contact Us
//             </button>
//           </div>

//           <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.png'; // ✅ import logo image

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          {/* ✅ Logo Only */}
          <div
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={logo} alt="Logo" className="nav-logo" />
          </div>

          {/* Nav Links */}
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('pricing')}>Pricing</a>
            <a onClick={() => scrollToSection('testimonials')}>Testimonials</a>
            {/* <a onClick={() => scrollToSection('services')}>Services</a> */}
          </div>

          {/* Button */}
          <div className="nav-actions">
            <button
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="mobile-menu-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
