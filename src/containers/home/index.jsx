import React, { useState, useEffect } from "react";
import { Animate } from "react-simple-animate";
import "./styles.scss"; 
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import cvPDF from './CV/Nebiyu-Cv-senior.pdf'; 

const Home = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPDF;
    link.setAttribute('download', 'Nebiyu-Cv-senior.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const phrases = [
    "Hello, I'm Nebiyu",
    "I'm a Full Stack Developer",
    "AI & Blockchain enthusiast",
    "'Shape the future by creating it.'",
  ];

  const typingDelay = 80;
  const erasingDelay = 50;
  const newTextDelay = 1000;

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    require("../../images/neba3.jpg"),
    require("../../images/favoriteimg1.jpg"),
    require("../../images/neba4.JPG"),
    require("../../images/AI.jpg"),
    require("../../images/graphfull.png"),
    require("../../images/meanandmern.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3500); // Adjust the duration as necessary

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    if (charIndex === phrases[currentPhraseIndex].length + 1 && !isDeleting) {
      setTimeout(() => {
        setIsDeleting(true);
      }, newTextDelay);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
      }, isDeleting ? erasingDelay : typingDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentPhraseIndex, isDeleting, charIndex]);

  const handleNavigateToContactMePage = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const currentDisplayText = phrases[currentPhraseIndex].substring(0, charIndex);

  return (
    <section id="home" className="home">
      <div className="background-image-container">
        <div className="background-image slide-active"
          style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})`,            
        }}>
        </div>
        <div  
          className="background-image slide-enter"
          style={{ backgroundImage: `url(${backgroundImages[(currentImageIndex + 1) % backgroundImages.length]})` }}
        ></div>
      </div>
      <div className="constant-black-overlay"></div>
      <div className="home__text-wrapper">
        <h1>
          &nbsp;&nbsp;{currentDisplayText}
          <span className="blinking-cursor">|</span>
          <br />
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
       <div className="home__icons">
      <a href="https://github.com/Nebagit" target="_blank" rel="noopener noreferrer">
        <FaGithub className="contact-icon" />
      </a>
      <a href="https://www.linkedin.com/in/nebiyu-tefera-aau/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="contact-icon" />
      </a>
      <a href="tel:+251923536007">
        <FaPhone className="contact-icon" />
      </a>
      <a href="mailto:nebiyutefera2112@gmail.com">
        <FaEnvelope className="contact-icon" />
      </a>
    </div>
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
        <div className="resume__cv"><button onClick={handleDownload} className="download-button">Download CV</button></div>

      </Animate>
    </section>
  );
};

export default Home;
