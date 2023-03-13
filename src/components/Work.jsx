import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import data from "../data/work";
import { FaGithub, FaFigma } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const Work = () => {
  const { t } = useTranslation("common");

  return (
    <div
      name="work"
      className="w-full md:h-screen bg-white dark:bg-[#1f2021] text-[#1f2021] dark:text-white"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 border-violet-400">
            {t("nav.work")}
          </p>
          <p className="py-6 text-2xl">{t("work.text")}</p>
        </div>
        <ScrollContainer
        vertical={false}
          className="flex cursor-grab scroll-smooth"
        >
          {data.map((item, index) => {
            return (
              <div key={index} className="w_item">
                <div
                  className="w_image"
                  style={{ backgroundImage: `url(${item.i})` }}
                />
                <div className="w-11/12 px-2 h-14 flex items-center justify-between ">
                  <h2 className="text-base font-bold pt-2">{item.a}</h2>
                  {item.g && (
                    <button
                      onClick={() => {
                        window.open(item.g);
                      }}
                      className="hover:text-violet-600 duration-500"
                    >
                      <FaGithub title="GitHub" size={20} />
                    </button>
                  )}
                  {item.f && (
                    <button
                      onClick={() => {
                        window.open(item.f);
                      }}
                      className="hover:text-violet-600 duration-500"
                    >
                      <FaFigma title="Figma" size={20} />
                    </button>
                  )}
                </div>
                <div className="px-2">{item.d}</div>
              </div>
            );
          })}
        </ScrollContainer>
      </div>
    </div>
  );
};
export default Work;
