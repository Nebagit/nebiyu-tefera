import React, { useState, useRef, useEffect } from "react";
import "./services.css";
import { FaCheckCircle,FaArrowRight, FaTimes, FaLightbulb,FaCode } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';




const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const modalRef = useRef();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const closeModal = () => {
    setToggleState(0);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setToggleState(0);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I do</span>
      <div className="services-icons-container">
      <FaTools />
    </div>

      <div className="services__container container grid">
        {/* first service content */}

        <div className="services__content">
          <div>
          <MdWeb className="services__icon" />
            <h3 className="services__title">
            Full Stack 
          <br /> Web Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
          <FaArrowRight className="services__button-icon" />
          </span>

          {/* <div className="services__modal"> */}
          <div
            ref={modalRef}
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
            <FaTimes className="services__modal-close" onClick={() => toggleTab(0)} />
              <h3 className="services__modal-title">Full Stack Developer</h3>
              <p className="services__modal-description">
              Craft seamless web experiences blending front-end aesthetics with back-end functionality, ensuring robust development and user satisfaction.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Design and develop dynamic and responsive web applications.
                  </p>
                </li>

                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Implement complex functionalities on both the front-end and back-end.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Utilize a variety of programming languages and frameworks such as ReactJS, NodeJS, AngularJS, HTML, CSS, and PHP.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Ensure scalability and security of web projects.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Provide ongoing maintenance and support for web applications.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Collaborate with cross-functional teams to deliver high-quality solutions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* second service content */}

        <div className="services__content">
          <div>
          <FaCode className="services__icon" />
            <h3 className="services__title">
            Software  <br /> Engineer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
<FaArrowRight className="services__button-icon" />
          </span>

          <div
          ref={modalRef}
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
            <FaTimes className="services__modal-close" onClick={() => toggleTab(0)} />
              <h3 className="services__modal-title">Software Engineer</h3>
              <p className="services__modal-description">
              Engineer elegant and efficient software solutions across platforms, driving innovation through meticulous testing and adherence to best practices.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Engineer elegant and efficient software solutions using languages like C++, Java, and Python.
                  </p>
                </li>

                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Develop mobile applications with Dart (Flutter) and other relevant technologies.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Industry-standard design tools for high-fidelity designs.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Architect scalable and robust software systems.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Conduct thorough testing and debugging to ensure software quality.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Stay updated on industry trends and best practices in software development.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Collaborate with stakeholders to define project requirements and objectives.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* third services content */}
        <div className="services__content">
          <div>
          <FaLightbulb className="services__icon" />
            <h3 className="services__title">
            Technology <br /> Consultant
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
<FaArrowRight className="services__button-icon" />
          </span>

          <div
           ref={modalRef}
           className={
             toggleState === 3
               ? "services__modal active-modal"
               : "services__modal"
           }
          >
            <div className="services__modal-content">
            <FaTimes className="services__modal-close" onClick={() => toggleTab(0)} />
              <h3 className="services__modal-title">Technology Consultant</h3>
              <p className="services__modal-description">
              Offer strategic guidance on leveraging emerging technologies for digital transformation, empowering businesses to stay ahead in the ever-evolving tech landscape.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Offer strategic guidance on leveraging emerging technologies such as AI and Blockchain.
                  </p>
                </li>

                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Assess feasibility and potential impact of technology solutions on business objectives.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Develop implementation strategies and roadmaps for integrating new technologies into existing infrastructures.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Provide expertise in evaluating and selecting appropriate technologies and platforms.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Offer training and support to internal teams on implementing and utilizing new technologies.
                  </p>
                </li>
                <li className="services__modal-service">
                <FaCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                  Conduct research and analysis on industry trends and competitive landscape.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
