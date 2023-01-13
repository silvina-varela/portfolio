import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFileAlt
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from '../hooks/useDarkMode';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from "react-i18next";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const { t } = useTranslation('common');


  /** Dark mode */
  const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(
        colorTheme === "light" ? false : true
    );
  
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkMode(checked);
    };

  return (
    <div className='z-10 fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#1f2021] text-white'>
    <div className='border-2 p-2'>
        <h1 className='font-semibold text-l'>SV</h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500}>
          {t("nav.home")}
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
          {t("nav.about")}
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
          {t("nav.skills")}
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
          {t("nav.work")}
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
          {t("nav.contact")}
          </Link>
        </li>
        <li>
            <LanguageSelector/>
            
        </li>
        <li>
            <DarkModeSwitch
                checked={darkMode}
                onChange={toggleDarkMode}
                size={25}
                style={{color: 'white'}}

            />
        </li>
        
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#1f2021] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          {t("nav.home")}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          {t("nav.about")}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
          {t("nav.skills")}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
          {t("nav.work")}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
          {t("nav.contact")}
          </Link>
        </li>
        <li>
        <DarkModeSwitch
                checked={darkMode}
                onChange={toggleDarkMode}
                size={25}
            />
        </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-[#1f2021] dark:text-white'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full ml-5'
              href='/'
            >
              LinkedIn <FaLinkedin size={25} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full ml-5'
              href='/'
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full ml-5'
              href={("nav.resumeLink")}
              download="SilvinaVARELA_resume"
              target='_blank' rel="noreferrer"
            >
              {t("nav.resume")} <FaFileAlt size={25} />
            </a>
          </li>  */}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
