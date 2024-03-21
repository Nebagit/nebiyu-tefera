import React, { useEffect } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { data } from "./utils";
import './styles.scss';
import {MdWork} from 'react-icons/md';
import cvPDF from './CV/Nebiyu-Cv-senior.pdf'; // Replace 'your_cv_file.pdf' your actual file name

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPDF;
    link.setAttribute('download', 'Nebiyu-Cv-senior.pdf'); // Replace 'YourCVFileName.pdf' with your actual file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScroll = () => {
    const elements = document.querySelectorAll('.timeline__experience__vertical-timeline-element, .timeline__education__vertical-timeline-element');
    elements.forEach((element) => {
      const bounding = element.getBoundingClientRect();
      if (bounding.top >=0 && bounding.bottom <= window.innerHeight) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="resume__cv"><button onClick={handleDownload} className="download-button">Download CV</button></div>

      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'rgb(238,44,130)',
                  border : '1.9px solid var(--yellow-theme-main-color)'
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <img src={item.image} alt={item.title} className="timeline__experience__vertical-timeline-element__image" />
                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                <div className="hover-description">{item.hoverDescription}</div> {/* Hover description */}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'rgb(238,44,130)',
                  fontSize:'15px',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subTitle} 
                  </h4>
                </div>
                <img src={item.image} alt={item.title} className="timeline__experience__vertical-timeline-element__image" />
                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                <div className="hover-description">{item.hoverDescription}</div> {/* Hover description */}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
