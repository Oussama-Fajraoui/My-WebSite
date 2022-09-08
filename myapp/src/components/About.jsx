import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        I enjoy using new technologies in all my projects
        because I consider it as a challenge for me and as an enhance for my technical skills, because in our domain we have always new updates and new technologies and as a web Developer i need to be up to date no matter how that can be difficult 
        and that's what makes web development awesome, also i enjoy sharing all my Projects in my github account so people can give me feedbacks about them.       
        </p>

        <br />

      </div>
    </div>
  );
};

export default About;