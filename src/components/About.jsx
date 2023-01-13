import React from "react";
import { useTranslation } from "react-i18next";

const About = () => { 
  const { t } = useTranslation('common');
  
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
                {t("nav.about")}
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
           {t("about.type") === "type-me" ? <span className="type-me"></span> : <span className="type-yo"></span>}
              </p>
            </div>
            <div>
              <p>{t("about.bio")}</p>
              <br/>
              <p>{t("about.extra")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;