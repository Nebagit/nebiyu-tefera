import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/Netflix.png";
import ImageTwo from "../../images/amazon.jpg";
import ImageThree from "../../images/Evangadi-forum.png";
import ImageFour from "../../images/Employee.png";
import ImageFive from "../../images/Expense-tracker.png";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "Netflix",
    image: ImageOne,
    link: "https://nebagit.github.io/Netflix-clone-neba/",
  },
  {
    id: 2,
    name: "Amazon",
    image: ImageTwo,
    link: "https://nebagit.github.io/amazonclon/",
  },
  {
    id: 3,
    name: "Evangadi Fourem",
    image: ImageThree,
    link: "https://nebagit.github.io/login",
  },
  {
    id: 4,
    name: "Employee Mgt system",
    image: ImageFour,
    link: "https://nebagit.github.io/Employee-mgt-syst/",
  },
  {
    id: 5,
    name: "Student Expense Tracker",
    image: ImageFive,
    link: "https://youtu.be/wD-E0Rqlr5k",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Deployed",
  },
  {
    filterId: 3,
    label: "Video Demo",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, "_blank")}>
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
