import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./testimonial.css";
import  { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { ClientsInfo } from './clientsInfo';
import SwiperCore from 'swiper';
import { FaThumbsUp, FaArrowLeft, FaArrowRight, FaPause, FaPlay } from 'react-icons/fa';

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Testimonial = () => {
  const [swiper, setSwiper] = useState(null);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (swiper && isAutoPlayEnabled) {
        swiper.slideNext();
      }
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [swiper, isAutoPlayEnabled]);

  const toggleAutoPlay = () => {
    setIsAutoPlayEnabled(!isAutoPlayEnabled);
    if (swiper) {
      if (isAutoPlayEnabled) {
        swiper.autoplay.stop(); // Stop autoplay
      } else {
        swiper.autoplay.start(); // Start autoplay
      }
    }
  };
  

  return (
      <section className="testimonial container section" id="testimonials">
         <div className="testimonial-whole">
          <div className="testimonial__content">
            <h2 className="section__title">Who am I by others</h2> 
            <span className="section__subtitle">Nebiyu in his refrees</span>
            <FaThumbsUp className="recommendation-icon" />
        </div>
        <div className="swiper-slider">
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={10} // Add space between slides
          slidesPerView={1}
          navigation={{
            nextEl: '.testimonial__next',
            prevEl: '.testimonial__prev',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
          }}
          onSwiper={(s) => setSwiper(s)}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {ClientsInfo.map(({ id, image, title, description, email, phone }) => {
            return (
              <SwiperSlide className="testimonial__card" key={id}>
                <img
                  src={image}
                  alt="testimonial__img"
                  className="testimonial__img"
                />
                <h3 className="testimonial__name">{title}</h3>
                <p className="testimonial__description">{description}</p>
                <p className="testimonials-contact">{email}</p>
                <p className="testimonials-contact">{phone}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>
        <div className="testimonial__navigation">
          <FaArrowLeft onClick={() => swiper.slidePrev()} className="testimonial__prev" />
          {isAutoPlayEnabled ? (
            <FaPause onClick={toggleAutoPlay} className="testimonial__pause" />
          ) : (
            <FaPlay onClick={toggleAutoPlay} className="testimonial__play" />
          )}
          <FaArrowRight onClick={() => swiper.slideNext()} className="testimonial__next" />
        </div>
        
      </div>
      </section>
  );
};

export default Testimonial;
