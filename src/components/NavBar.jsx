import React, { useState, forwardRef } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaDownload
} from 'react-icons/fa';
import { Link } from 'react-scroll';

/** Dark mode imports */
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from '../hooks/useDarkMode';

/** Translation imports */
import LanguageSelector from './LanguageSelector';
import { useTranslation } from "react-i18next";

/** PDF viewer imports */
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = () => {
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

  /** PDF viewer  */
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    fetch(t("nav.resumeLink")).then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = t("nav.resumeLink");
          alink.click();
      })
  })
  }
 
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
        <li className='py-6 flex'>
            <LanguageSelector/>
            <DarkModeSwitch
                checked={darkMode}
                onChange={toggleDarkMode}
                size={20}
                className='ml-4'
            />
            
        </li>
        
        <li className='py-6 flex'>
            <a
              href='https://www.linkedin.com/in/silvinavarela/'
              target='_blank'
              rel="noreferrer"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href='https://github.com/silvina-varela'
              target='_blank'
              rel="noreferrer"
              className='ml-4'
            >
              <FaGithub size={25} />
            </a>
          </li>
        
          <li className='text-lg'>
            <button onClick={handleClickOpen}>{t("nav.resume")}</button>
          </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-[#1f2021] dark:text-white'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full ml-5'
              href='https://www.linkedin.com/in/silvinavarela/'
              target='_blank'
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={25} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full ml-5'
              href='https://github.com/silvina-varela'
              target='_blank'
              rel="noreferrer"
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <button className='flex justify-between items-center w-full ml-5' onClick={handleClickOpen}>{t("nav.resume")} <FaFileAlt size={25}/></button>
          </li> 
        </ul>
      </div>
      {/* Resume */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
       
      >
        <AppBar sx={{ position: 'relative', backgroundColor: 'white' }} >
          <Toolbar
          sx={{ backgroundColor: 'white'}}>
            <IconButton
              edge="start"
              sx={{ text: 'black'}}
              onClick={handleClose}
              aria-label="close"
            >
              <FaTimes />
            </IconButton>

            <Typography sx={{ ml: 2, flex: 1, color: 'black' }} variant="h6" component="div">
            {t("nav.resume")}
            </Typography>

            <IconButton
              edge="end"
              sx={{ text: 'black'}}
              onClick={handleDownload}
              aria-label="close"
            >
              <FaDownload/>
            </IconButton>
            
         
            
          </Toolbar>
        </AppBar>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
        <Viewer fileUrl={t("nav.resumeLink")} />;
        </Worker>
      </Dialog>  
    </div>
  );
};
export default Navbar;
