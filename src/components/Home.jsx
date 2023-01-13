import React from 'react';
import { Link } from "react-scroll"; 
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation('common');
  return (
    <div
    name="home"
    className="h-screen w-full bg-white dark:bg-[#1f2021]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold underline decoration-violet-400 text-[#1f2021] dark:text-white">
          Full Stack Developer
        </h2>
        <p className="text-gray-500 text-2xl py-4 max-w-lg mb-5">
          {t("home.text")}
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="cursor-pointer bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded"
          >
            {t("home.button")}
          </Link>
        </div>
      </div>
      {/* <div>
        <img
          src={portrait}  
          alt="portrait"
          className="rounded-2xl mx-auto w-2/3 md:w-1/2"
        />
      </div> */}
    </div>
  </div>
  );
};
export default Home;