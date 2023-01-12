import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-white dark:bg-[#1f2021] text-[#1f2021] dark:text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-violet-400">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
              <span className="type-me"></span>
              </p>
            </div>
            <div>
              <p>
                {" "}
                As a Full Stack Developer familiar with backend technologies, I mostly focus on the frontend. I'm passionate about building scalable and accessible web applications.
                I believe my background in book publishing and translation has given me invaluable tools that help me write clean code,  
                
                In addition to web development, I am also an
                editor. My pas­sion lies in build­ing scalable web in­fra­struc­ture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;