import './navbar.css';
import React, { useState, useEffect }  from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
// import { MoonIcon } from '@heroicons/react/24/outline'
import resume from 'assets/documents/resume/Resume-Mayank_Lad.pdf';
import logo from 'assets/images/logo512.png';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isNavbarOpen, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!isNavbarOpen);
  };

  useEffect(() => {
    const scrollElement = document.getElementsByClassName('App')[0];

    const scrollEventListner = () => {
      // console.log(scrollElement.scrollTop);
      const navbarContainer = document.getElementsByClassName('navbar-container')[0];
      if (scrollElement.scrollTop > navbarContainer.clientHeight) {
        setScrolling(true);
      }
      else {
        setScrolling(false);
      }
    };

    scrollElement.addEventListener('scroll', scrollEventListner);
  });

  useEffect(() => {
    const menuButton = document.getElementById('menu-button');

    const menuBtnDisplayPropObserver = new ResizeObserver(() => {
      const displayPropValue = menuButton.computedStyleMap().get('display').value;
      
      if (displayPropValue === 'none' && isNavbarOpen) {
        toggleNavbar();
      }
    });

    menuBtnDisplayPropObserver.observe(menuButton);

    // Cleanup the observer when the component unmounts
    return () => {
      menuBtnDisplayPropObserver.disconnect();
    };
  });

  const hireOnClick = () => {
    const link = document.createElement('a');
    link.href = '#contact';
    link.click();
    link.remove();
  };

  const resumeOnClick = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Resume - Mayank Ashokkumar Lad.pdf';
    link.click();
    link.remove();
  };

  return (
    <header className={`navbar-container absolute flex flex-row w-full h-[60px] bg-white justify-between items-center [transition:opacity_700ms,visibility_700ms] ${scrolling | isNavbarOpen ? 'opacity-100 z-10 visible' : 'opacity-0 collapse'}`}>
      <a className='not-prose ml-3 mr-5 h-3/4 aspect-square' href='#home'><img className='h-full' src={logo} alt='logo'></img></a>
      <nav className={`menu-container not-prose max-lg:absolute lg:flex lg:justify-center max-lg:top-[60px] w-full max-lg:bg-white max-lg:border-y max-lg:border-solid max-lg:[transition:opacity_700ms,visibility_700ms] ${isNavbarOpen ? 'max-lg:opacity-100 max-lg:z-10 max-lg:visible' : 'max-lg:opacity-0 max-lg:collapse'}`}>
        <ul className='menu flex flex-col lg:flex-row max-lg:my-3 max-lg:mx-12 text-center'>
          <li className='menu-item lg:border-r'><a className='block max-lg:pb-3 max-lg:pt-3 lg:px-4' href="#home"><b>Home</b></a></li>
          <li className='menu-item max-lg:border-t lg:border-r'><a className='block max-lg:pb-3 max-lg:pt-3 lg:px-4' href='#about'><b>About</b></a></li>
          <li className='menu-item max-lg:border-t lg:border-r'><a className='block max-lg:pb-3 max-lg:pt-3 lg:px-4' href='#experience'><b>Experience</b></a></li>
          <li className='menu-item max-lg:border-t lg:border-r'><a className='block max-lg:pb-3 max-lg:pt-3 lg:px-4' href='#interests'><b>Interests</b></a></li>
          <li className='menu-item max-lg:border-t lg:border-r'><a className='block max-lg:pb-3 max-lg:pt-3 lg:px-4' href='#skills'><b>Skills</b></a></li>
          <li className='menu-item max-lg:border-t lg:border-r'><a className='block max-lg:pb-3 max-lg:pt-3 lg:px-4' href='#projects'><b>Projects</b></a></li>
          <li className='menu-item max-lg:border-t'><a className='block max-lg:pb-3 max-lg:pt-3 lg:px-4' href='#contact'><b>Contact</b></a></li>
        </ul>
      </nav>
      <div className='buttons-container flex flex-row items-center mx-5'>
        <button
          type='button'
          onClick={hireOnClick}
          className='hire-button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded whitespace-nowrap'
        >
          Hire me
        </button>
        <button
          type='button'
          onClick={resumeOnClick}
          className='resume-button ml-2.5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
        >
          {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
          <span>Resume</span>
        </button>
        {/* <button type='button' className='theme-button ml-2.5'>
          <MoonIcon className='w-6 text-black' />
        </button> */}
        <button id='menu-button' type='button' className='menu-button lg:hidden ml-2.5' onClick={toggleNavbar}>
          <Bars3Icon className='w-6 text-black' />
        </button>
      </div>
    </header>
  );
}

export default Navbar;