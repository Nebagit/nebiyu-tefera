import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDev, FaCode } from "react-icons/fa";
import {  SiPytorch,SiBlockchaindotcom } from "react-icons/si";
import { FaRocket } from 'react-icons/fa';

const personalDetails = [
  {
    label: "Name:",
    value: "Nebiyu Tefera",
  },
  {
    label: "Age:",
    value: "21",
  },
  {
    label: "Address:",
    value: "Ethiopia, Addis Ababa",
  },
  {
    label: "Email:",
    value: "nebiyutefera2112@gmail.com",
  },
  {
    label: "Contact No:",
    value: "+251923536007",
  },
];
const jobSummary =
  "My journey in computer science began at Addis Ababa University, where I delved deep into programming fundamentals and software development methodologies. With a solid foundation established, I ventured into specialized areas, focusing particularly on full-stack web development. As a Full Stack Developer, I bring to the table a versatile skill set honed through rigorous academic training and practical experience. \n" +
  "Proficient in a multitude of programming languages including C++, C# (.Net), Java, Python, and PHP, I possess the flexibility to adapt to diverse project requirements. My expertise extends to frameworks like ReactJS, NodeJS, and AngularJS, allowing me to seamlessly navigate front-end and back-end development challenges.\n" +
  "My academic journey was complemented by real-world exposure gained through graduation from Evangadi Networks. Here, I not only refined my skills in React and Node but also gained invaluable insights into industry practices and project management.\n"+
  "However, my journey goes beyond just mastering technologies. With a deep-seated passion for innovation and problem-solving, I am driven to explore emerging technologies such as AI and Blockchain. I firmly believe in the mantra, 'The best way to predict the future is to create it,' and I am committed to leveraging my expertise to contribute to groundbreaking solutions that shape the future of technology."
  ;

const About = () => {
  return (
    <section id="about" className="about">
     <PageHeaderContent
    headerText="About Me"
    icon={<BsInfoCircleFill size={40} />}

/>


      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 style={{ fontSize: "50px", textAlign: "center", fontWeight: "bold" }}>Embarking on the Journey of Development Mastery <br /> <br /><FaRocket style={{ fontSize: "100px", textAlign: "center", fontWeight: "bold" }} /></h3>
            {jobSummary.split('\n').map((paragraph, index) => (
              <p key={index} style={{ textAlign: 'justify' }}>
                {paragraph}
              </p>
            ))}
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText" >
              Personal Information
            </h3>
            <ul style={{ listStyleType: "none", marginLeft: "50px"  }}>
    {personalDetails.map((item, i) => (
        <li key={i}>
            <span className="title">{item.label}</span>
            <span className="value">{item.value}</span>
        </li>
    ))}
</ul>

          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">

            <div className="about__content__servicesWrapper__innerContent__image"></div>
            <div className="about__content__servicesWrapper__innerContent__icons">
              <div><FaDev size={60} color="#FFFFFF"/></div>
              <div><SiPytorch size={60} color="#FFFFFF" /></div>
              <div><FaCode size={60} color="#FFFFFF"/></div>
              <div><SiBlockchaindotcom size={60} color="#FFFFFF" /></div>
            </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
