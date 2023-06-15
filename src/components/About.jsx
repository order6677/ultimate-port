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
  
          <p className="text-xl mt-20">
          I am passionate about transforming complex challenges into elegant solutions. 
          With a knack for clean code and a deep understanding of the latest technologies, 
          
          </p>
  
          <br />
  
          <p className="text-xl">
          I enjoy creating user-friendly software. From front-end design to back-end development,
           I bring a holistic approach to every project I work on, and strive to deliver the highest quality results. 
           Take a look at my work and let's see how I can help bring your ideas to life!
          </p>
        </div>
      </div>
    );
  };
  
  export default About;