import React, { useEffect, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import data from "../data/work";
import {
  FaGithub,
  FaArrowRight,
  FaArrowLeft
} from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation('common');
  const sliderRef = useRef();
  const [prev, set_prev] = useState(false);
  const [next, set_next] = useState(false);

  function slideNext() {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth - 300;
  }
  function slidePrev() {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth - 300;
  }

  useEffect(() => {
    if (sliderRef.current) {
      function scrollHandle() {
        const isEnd = sliderRef.current.scrollLeft + sliderRef.current.offsetWidth === sliderRef.current.scrollWidth;
        const isBegin = sliderRef.current.scrollLeft === 0;
        set_prev(!isBegin);
        set_next(!isEnd);
      }
      scrollHandle();
      sliderRef.current.addEventListener("scroll", scrollHandle);
      // return () => {
      //   sliderRef?.current?.removeEventListener("scroll", scrollHandle);
      // };
    }
  }, [sliderRef]);



  return (
    <div name='work' className='w-full md:h-screen bg-white dark:bg-[#1f2021] text-[#1f2021] dark:text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 border-violet-400'>
          {t("nav.work")}
          </p>
          <p className='py-6 text-2xl'>{t("work.text")}</p>
        </div>

        <div className="flex flex-col ">
      <div className="flex relative"> 
        <ScrollContainer className="flex cursor-grab scroll-smooth" innerRef={sliderRef}>
          {data.map((item, index) => {
            return (
              <div key={index} className="w_item">
                <div
                  // onClick={() => {
                  //     window.open(item.l);
                  // }
                  // }
                  className="w_image"
                  style={{ backgroundImage: `url(${item.i})` }}
                />
                <div className="w-11/12 px-2 h-14 flex items-center justify-between ">
                  <h2 className="text-base font-bold pt-2">{item.a}</h2>
                  <button onClick={() => {window.open(item.g);}} className="hover:text-violet-600 duration-500"><FaGithub title='GitHub' size={20}/></button>
                </div>
                <div className="px-2">{item.d}</div>
              </div>
            );
          })}
        </ScrollContainer>
        
      </div>
     <div className="flex justify-end pr-4 text-xl mb-12 invisible md:visible">
     {prev && (
          <button className="absolute rounded-3xl p-2 bg-violet-500 hover:bg-violet-400 text-white border-violet-700 hover:border-violet-500 border-none cursor-pointer hover:scale-105" onClick={slidePrev}>
          <FaArrowLeft/>
          </button>
        )}
        {next && (
          <button className="absolute rounded-3xl p-2 bg-violet-500 hover:bg-violet-400 text-white border-violet-700 hover:border-violet-500 border-none cursor-pointer hover:scale-105" onClick={slideNext}>
          <FaArrowRight/>
          </button>
        )}
     </div>
    </div>
    </div>
    </div>
  );
};
export default Work;