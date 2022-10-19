import React from 'react'
import HeroImage from '../assets/heroImage.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
    return (
        <div
          name="home"
          className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 "
        >
          <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 md:flex-row">
            <div className='mt-40'>
              <p className='text-white'>Hi, my name is :</p>
              <h2 className="text-4xl sm:text-3xl font-bold text-white">
                Oussama Fajraoui
              </h2>
              <p className="text-gray-500 max-w-md">
              I’m a Full Stack JavaScript developer, also
I'm a great communicator, dynamic and
problem solving person. through my
experience I'd worked on a lot of projects
that made me technically confident, but I
still aiming to learn more technologies
and that's why I'm looking to develop my
knowledge skills.
              </p>
    
              <div>
                <Link
                  to="My Projects"
                  smooth
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                  My Projects
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={10} />
                  </span>
                </Link>
              </div>
            </div>
    
            <div>
              <img
                src={HeroImage}
                alt="my profile"
                className="rounded-2xl mx-auto w-2/3 mt-40 outline-hidden"
              />
            </div>
          </div>
        </div>
      );
}

export default Home