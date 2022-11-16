import React from 'react'
import { motion } from "framer-motion";



function About() {
  const pageInfo = [
    {
      profilePic:"https://cdn.sanity.io/images/10ba2g2h/production/6614f8ae6565e8b2b930633ab7cb76e48fd4793a-1623x1080.jpg?rect=356,46,990,1034&w=2000&fit=max&auto=format",
      backgroundInformation:"I’m a Full Stack JavaScript developer, also I'm a great communicator, dynamic and problem solving person. Through my experience I'd worked on a lot of projects that made me technically confident, but I still aiming to learn more technologies and that's why I'm looking to develop my knowledge skills."
    }
  ]
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7x1 px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2x1'>
        About
    </h3>
    {pageInfo.map((info) => (

      <motion.img 
      initial={{
        x:-200,
        opacity: 0
      }}
      transition={{
        duration: 1.2
    }}
    whileInView={{
        x:0,
        opacity: 1
      }}
      viewport={{once:true}}
      src={info.profilePic}
      className='-mb-20 md:mb-0 flex-shrink-0 w-45 h-45 rounded-full object-cover md:rounded-lg md:w-50 md:h-70 xl:w-[300px] xl:h-[400px]'
      />
      ))}
    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4x1 font-semibold'>
            Here is a{" "} 
        <span className='underline decoration-[#F7AB0A]'>little</span>{" "} 
        background
        </h4>
        {pageInfo.map((info) => (

          <p className='text-sm'>
            {info.backgroundInformation}
        </p>
          ))}
    </div>

    </motion.div>
  )
}

export default About