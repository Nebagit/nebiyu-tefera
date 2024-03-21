import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/navBar";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Footer from "./containers/footer/Footer";
import smoothscroll from "smoothscroll-polyfill";
import Testimonials from "./containers/testimonials/testimonial.jsx";
import Services from "./containers/services/services.jsx";
import ScrollUp from "./containers/scrollUp/ScrollUp.jsx";

import "./App.scss";

// Add smooth scroll polyfill
smoothscroll.polyfill();

function App() {
  // const location = useLocation();
  const sections = {
    home: useRef(null),
    about: useRef(null),
    resume: useRef(null),
    skills: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    for (let section in sections) {
      if (isElementInViewport(sections[section].current)) {
        window.history.replaceState(null, null, `#${section}`);
        break;
      }
    }
  };

  const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const scrollToSection = (section) => {
    const offsetTop = sections[section].current.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <div ref={sections.home} id="home" className="section home">
        <Home />
      </div>
      <div
        ref={sections.about}
        id="about"
        className="section about animate-on-scroll"
      >
        <About />
      </div>
      <div
        ref={sections.resume}
        id="resume"
        className="section resume animate-on-scroll"
      >
        <Resume />
      </div>
      <div
        ref={sections.skills}
        id="skills"
        className="section skills animate-on-scroll"
      >
        <Skills />
      </div>
      <div
        ref={sections.testimonials}
        id="testimonials"
        className="section testimonials animate-on-scroll"
      >
        <Services />
      </div>
      <div
        ref={sections.portfolio}
        id="portfolio"
        className="section portfolio animate-on-scroll"
      >
        <Portfolio />
      </div>
      <div
        ref={sections.testimonials}
        id="testimonials"
        className="section testimonials animate-on-scroll"
      >
        <Testimonials />
      </div>

      <div
        ref={sections.contact}
        id="contact"
        className="section contact animate-on-scroll"
      >
        <Contact />
      </div>
      <ScrollUp />
      <Footer />
    </div>
  );
}

export default App;
