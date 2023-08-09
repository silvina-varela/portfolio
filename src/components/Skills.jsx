import React from "react";
import { useTranslation } from "react-i18next";
import skills from "../data/skills";

const Skills = () => {
  const { t } = useTranslation("common");

  return (
    <div
      name="skills"
      className="w-full h-screen bg-white dark:bg-[#1f2021] text-[#1f2021] dark:text-white"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-violet-400 text-center">
            {t("nav.skills")}
          </p>
          <p className="py-4 text-2xl">{t("skills.text")}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 cursor-cell">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <p className="my-4">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
