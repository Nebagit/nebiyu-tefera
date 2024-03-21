import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";
import "./styles.css";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaTelegram,
} from "react-icons/fa";

const FooterStyle = styled.div`
  background-color: var(--yellow-theme-main-color);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col {
    line-height: 1.8; /* Adjust line height as needed */
  }

  .footer__col1 {
    flex: 2;
  }
  .footer__col__title {
    font-size: 3rem; /* Adjust font size of headers */
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
    font-size: 1.5rem;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <FooterStyle>
      <div
        className="container"
        style={{ fontFamily: "'Lobster', sans-serif" }}
      >
        <div className="footer__col1">
          <h1 className="footer__col1__title">Nebiyu Tefera</h1>
          <PText>
            As a dedicated full stack developer in React, Next.js, Node.js, and
            Express, I am passionate about creating innovative solutions. With a
            keen enthusiasm for rapidly mastering new technologies, I am
            committed to delivering high-quality, cutting-edge development work.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              { title: "Home", path: "home" },
              { title: "About", path: "about" },
              { title: "Skills", path: "skills" },
              { title: "Resume", path: "resume" },
              { title: "Portfolio", path: "portfolio" },
              { title: "Contact", path: "contact" },
            ]}
            handleClick={scrollToSection} // Pass the scroll function to FooterCol
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+251923536007",
                path: "tel:+251923536007",
              },
              {
                title: "nebiyutefera2112@gmail.com",
                path: "mailto:nebiyutefera2112@gmail.com",
              },
              {
                title: "Ethiopia, Addis Ababa, 4 Kilo (King George VI St)",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/nebiyu-tefera-aau/",
                icon: <FaLinkedin style={{ color: "black" }} />,
              },
              {
                title: "Github",
                path: "https://github.com/Nebagit",
                icon: <FaGithub style={{ color: "black" }} />,
              },
              {
                title: "Telegram",
                path: "https://t.me/Tatuye",
                icon: <FaTelegram style={{ color: "black" }} />,
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container" style={{ fontFamily: "'Caveat', cursive" }}>
          <PText>
            <div className="home__icons">
              <a
                href="https://github.com/Nebagit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="contact-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/nebiyu-tefera-aau/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="contact-icon" />
              </a>
              <a href="tel:+251923536007">
                <FaPhone className="contact-icon" />
              </a>
              <a href="mailto:nebiyutefera2112@gmail.com">
                <FaEnvelope className="contact-icon" />
              </a>
              <a
                href="https://t.me/Tatuye"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="contact-icon" />
              </a>
            </div>
            <div className="cr1">
              'The best way to predict the future is to create it.'
            </div>
            <div className="cr2">© 2024 Developed by Nebiyu Tefera</div>
            <div className="cr3">All rights reserved</div>
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
