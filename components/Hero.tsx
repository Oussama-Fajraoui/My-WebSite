import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Oussama Fajraoui",
      "Guy Who loves To Code",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const [title, count2] = useTypewriter({
    words: ["Software Developer", ""],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="https://pbs.twimg.com/profile_images/1590714811582660611/zCwt2KwH_400x400.jpg"
        alt="photos"
        className="relative rounded-full object-cover"
        width={128}
        height={128}
        loading="lazy"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 dark:text-gray-900 pb-2 tracking-[15px]">
          <span>{title}</span>
          <Cursor cursorColor="#CA3E47" />
        </h2>
        <h1 className="text-5xl lg:text-2xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#CA3E47" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="px-6 py-2 border border-[#363333] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#CA3E47]/40 hover:text-[#CA3E47]/40">About</button>
          </Link>
          {/* TODO */}
          {/* <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link> */}
          {/* TODO */}
          <Link href="#skills">
            <button className="px-6 py-2 border border-[#363333] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#CA3E47]/40 hover:text-[#CA3E47]/40">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="px-6 py-2 border border-[#363333] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#CA3E47]/40 hover:text-[#CA3E47]/40">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
