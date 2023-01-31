import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 dark:text-gray-700 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://cdn.sanity.io/images/10ba2g2h/production/6614f8ae6565e8b2b930633ab7cb76e48fd4793a-1623x1080.jpg?rect=356,46,990,1034&w=2000&fit=max&auto=format"
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:h-96 md:w-72 2xl:w-[500px] 2xl:h-[600px]"
        loading="lazy"
      />

      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-3xl font-semibold dark:text-gray-900">
             Here is a{" "}
        <span className='underline decoration-[#F7AB0A]'>Little</span>{" "} 
        background :
        </h4>
        <p className="text-sm">
          I am a software Developer specialiazing in designing, 
          building, and maintaining the server-side of web/mobile applications.
        </p>
        <p className="text-sm">
        I am passionate about building excellent software that improves the lives of those around me.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
