import React, { useRef, useState } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import emailjs from '@emailjs/browser';
import './styles.scss';
import image from "../../images/graphics-image-con.png";
import { FaHandshake, FaUsers } from 'react-icons/fa';


const Contact = () => {
  const form = useRef();
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zj0qnff', 'template_cyqz1lk', form.current, 'kF2-MOWEg0fKTFuJH')
      .then((result) => {
        console.log('Message sent:', result.text);
        alert('Your message has been sent!');
        e.target.reset();
      }, (error) => {
        console.log('Send email error:', error.text);
        alert('Failed to send the message, please try again later.');
      });
  };

  return (
    
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />} 
      />
      <div className="contact__wrapper">

        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >

          <div className="contact__wrapper__form-container">  
          
            <h3 className="contact__wrapper__form-container__header-text">Let's Talk</h3>

            <div className="contact__wrapper__form-container__formcontrolswrapper">
              <form ref={form} onSubmit={sendEmail}>
                <div className="inputName">
                  <input
                    type="text"
                    name="user_name"
                    required
                    onFocus={() => setNameFocused(true)}
                    onBlur={() => setNameFocused(false)}
                  />
                  <label className={nameFocused ? "focused" : ""}>Name</label>
                </div>
                <div className="inputEmail">
                  <input
                    type="email"
                    name="user_email"
                    required
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                  />
                  <label className={emailFocused ? "focused" : ""}>Email</label>
                </div>
                <div className="inputDescription">
                  <textarea
                    name="message"
                    required
                    rows="5"
                    onFocus={() => setMessageFocused(true)}
                    onBlur={() => setMessageFocused(false)}
                  ></textarea>
                  <label className={messageFocused ? "focused" : ""}>Message</label>
                </div>
                <button type="submit" className="button1">Send</button>
              </form>
            </div>
          </div>
        </Animate>

        <div className="contact__text-container">
          <div className="contact__text">
            <p>
              <div><FaHandshake className="cooperation-icon" /> <h1> Hi!</h1></div>
              As a passionate developer, I'm excited about the opportunity to collaborate
              with your team and community. With my skills, I'm committed to bringing innovative
              solutions to the table. <br /><br /> <FaUsers className="cooperation-icon" />
Let's work together to create something impactful
              and beneficial for our users and community. Reach out today,
              and let's start building together!
            </p>
          </div>
          <div className="contact__image">
            <img src={image} alt="nebiyucontact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
