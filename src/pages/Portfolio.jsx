import React, { useState } from "react";
import "../styles/portfolio.css";
import { Link } from 'react-router-dom';

const projects = [
  {
    src: "/imgs/galletasfortuna.jpg",
    alt: "Fortune Cookie App",
    description: "When you open this application it will give you your fortune for this day, Vite + React-Redux was used in its preparation.",
    link: "https://stupendous-valkyrie-4ca841.netlify.app/"
  },
  {
    src: "/imgs/weather.jpg",
    alt: "Weather App",
    description: "This app will give you the climate of your city in degrees Celsius and Fahrenheit, in the same way you can search for the climate of the city in the world that you want to know. Vite + React-Redux was used in its preparation.",
    link: "https://64a0d9b26243bb088540b145--deft-croquembouche-7f6f1f.netlify.app/"
  },
  {
    src: "/imgs/RickandMorty.jpg",
    alt: "Rick and Morty App",
    description: "This app shows you the characters of the cartoon Rick and Morty, their worlds, the characters who are alive or dead, as well as the times they appeared in said cartoon. Vite + React-Redux was used in its preparation.",
    link: "https://legendary-jelly-89eb1a.netlify.app/"
  },
  {
    src: "/imgs/users.jpg",
    alt: "Users App",
    description: "In this app you can enter users, with their names, telephone numbers, emails and it can be used as an agenda to save your contacts. Vite + React-Redux was used in its preparation.",
    link: "https://warm-donut-52d672.netlify.app/"
  },
  {
    src: "/imgs/pokemon.jpg",
    alt: "Pókedex App",
    description: "An application that searches for Pokémon, shows its most important characteristics and offers a search by individual Pokémon and by Pokémon types. Design and development of the app using React-Redux version 6",
    link: "https://dazzling-melomakarona-63db3c.netlify.app/"
  },
  {
    src: "/imgs/ecommerce.jpg",
    alt: "E-commerce App",
    description: "An application that simulates the purchase of various items from different brands online. Design and development of the app using React-Redux version 6. The layout was implemented in CSS. A test API was used to obtain the different products.",
    link: "https://bejewelled-babka-3dfe70.netlify.app/"
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-container">
      <h1 className="color-font">Portfolio</h1>
      <div className="portfolio-images">
        <div className="card-circle">
          {projects.map((project, index) => (
            <div
              className="img-item"
              key={index}
              style={{
                transform: `rotate(${(360 / projects.length) * index}deg)`,
              }}
            >
              <img
                className="img"
                src={project.src}
                alt={project.alt}
                onClick={() => openModal(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-button" onClick={closeModal}>
              X
            </button>
            <h2>App description</h2>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              Visit App
            </a>
          </div>
        </div>
      )}

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Portfolio;