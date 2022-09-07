import React from 'react';
import municipality from "../assets/portfolio/municipality.jpg";
import favmovie from "../assets/portfolio/fav movie.jpg";
import DMS from "../assets/portfolio/DMS.jpg";
import symphony from "../assets/portfolio/symphony.jpg";
import Movie from "../assets/portfolio/Movie.jpg";
import gamer from "../assets/portfolio/gamer.jpg";
import { Link } from "react-router-dom";


const MyProjects = () => {
    const myprojects = [
        {
          id: 1,
          src: municipality,
          link: "https://github.com/Green-Aura/Municipality-TN",
          demo: "https://www.youtube.com/watch?v=x4Nt0OHWNA4"
        },
        {
          id: 2,
          src: symphony,
          link: "https://github.com/Piano-Symphony/Symphony",
          demo: "https://www.youtube.com/watch?v=cVNRnV1_-Ls"
        },
        {
          id: 3,
          src: DMS,
          link: "https://github.com/Oussama-Fajraoui/DMS-Application",
          demo: "https://www.youtube.com/watch?v=_tU1NkPHu3E"
        },
        {
          id: 4,
          src: Movie,
          link: "https://github.com/Oussama-Fajraoui/CRUD-Movie-World",
          demo: "https://www.youtube.com/watch?v=A20AAmvLjTs"
        },
        {
          id: 5,
          src: favmovie,
          link: "https://github.com/Oussama-Fajraoui/Fav-Movies",
          demo: "https://www.youtube.com/watch?v=h2zz_yz1SjM"
        },
        {
          id: 6,
          src: gamer,
          link: "https://github.com/Oussama-Fajraoui/About-Me",
          demo: "https://www.youtube.com/watch?v=gALktnCFPl0"
        },
      ];
    
      return (
        <div
          name="My Projects"
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                My projects
              </p>
              <p className="py-6">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {myprojects.map(({ id, src, link, demo }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <a href={demo} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                    </a>
                    <a href={link} target="_blank" rel="noreferrer">
                    <button as={Link} to={link} variant="text" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default MyProjects