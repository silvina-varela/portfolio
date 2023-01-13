import React, {useState} from 'react';
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const { i18n } = useTranslation('common');

    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-3";

    const changeLanguage = (e) => {
        if(toggle) i18n.changeLanguage("es");
        else i18n.changeLanguage("en");
        setToggle(!toggle)
    }

    return(
        <div className='flex'>
        {/*   Switch Container */}
<span className='font-bold align-text-bottom pr-2'>EN</span>
        <div
          className="md:w-12 md:h-5 w-10 h-4 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
          onClick={changeLanguage}
        >
          {/* Switch */}
          <div
            className={
              "bg-black md:w-7 md:h-7 h-6 w-6 rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
       
        
      </div>
      <span className='font-bold align-text-bottom pl-2'>ES</span>
        </div>
    )
}

export default LanguageSelector;