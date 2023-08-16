import React from "react";
import "../styles/portfolio.css";
import { Link } from 'react-router-dom';

const projects = [
  {
    src: "/imgs/galletasfortuna.jpg",
    alt: "Fortune Cookie App",
    link: "https://stupendous-valkyrie-4ca841.netlify.app/"
  },
  {
    src: "/imgs/weather.jpg",
    alt: "Weather App",
    link: "https://64a0d9b26243bb088540b145--deft-croquembouche-7f6f1f.netlify.app/"
  },
  {
    src: "/imgs/RickandMorty.jpg",
    alt: "Rick and Morty App",
    link: "https://legendary-jelly-89eb1a.netlify.app/"
  },
  {
    src: "/imgs/users.jpg",
    alt: "Users App",
    link: "https://warm-donut-52d672.netlify.app/"
  },
  {
    src: "/imgs/pokemon.jpg",
    alt: "Pókedex App",
    link: "https://dazzling-melomakarona-63db3c.netlify.app/"
  },
  {
    src: "/imgs/ecommerce.jpg",
    alt: "E-commerce App",
    link: "https://bejewelled-babka-3dfe70.netlify.app/"
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="color-font">Portfolio</h1>
      <div className="portfolio-images">
        {projects.map((project, index) => (
          <Link to={project.link} key={index} target="_blank" rel="noopener noreferrer">
            <div className="img-item" style={{ transform: `rotate(${(360 / projects.length) * index}deg)` }}>
              <img className="img" src={project.src} alt={project.alt} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
