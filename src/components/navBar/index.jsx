import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-scroll"; 
import homeicon from "../../images/backremoved.png";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "home"
  },
  {
    label: "ABOUT ME",
    to: "about"
  },
  {
    label: "RESUME",
    to: "resume"
  },
  {
    label: "SKILLS",
    to: "skills"
  },
  {
    label: "SERVICES",
    to: "services"
  },
  
  {
    label: "PORTFOLIO",
    to: "portfolio"
  },
  {
    label: "RECOMMENDATION",
    to: "testimonial" 
  },
  {
    label: "CONTACT",
    to: "contact"
  }
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [navbarTextColor, setNavbarTextColor] = useState('white'); // Default text color

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleLinkClick = () => {
    setToggleIcon(false); // Close the mobile menu when a link is clicked
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);

    // Set navbar text color dynamically
    const computedStyles = window.getComputedStyle(document.getElementById(currentSection));
    setNavbarTextColor(computedStyles.color);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Lobster', sans-serif" }}>
      <nav className="navbar" style={{ backgroundColor: activeSection ? getComputedStyle(document.getElementById(activeSection)).backgroundColor : 'transparent', color: navbarTextColor }}>
        <div className="navbar__container">
          <Link to="home" className="navbar__container__logo">
            <img src={homeicon} alt="homeicone" height={150} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={handleLinkClick} // Close the mobile menu when a link is clicked
                spy={true} // Add spy behavior for active class to be added to the current section
                smooth={true} // Enable smooth scrolling
                duration={600} // Duration of the scroll animation
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
