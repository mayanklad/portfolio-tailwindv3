import './navbar.css';
import React, { useState, useEffect }  from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isNavbarOpen, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!isNavbarOpen);
  };

  useEffect(() => {
    const scrollElement = document.getElementsByClassName('App')[0];

    const scrollEventListner = () => {
      console.log(scrollElement.scrollTop);
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

  return (
    <header className={`navbar-container absolute flex flex-row w-full h-[60px] bg-red-500 justify-between items-center transition duration-700 ${scrolling ? 'opacity-100 z-10' : 'opacity-0 -z-50'}`}>
      <span>Logo</span>
      <nav className={`menu-container absolute top-[60px] w-full bg-blue-500 transition duration-700 ${isNavbarOpen ? 'opacity-100 z-10' : 'opacity-0 -z-50'}`}>
        <ul className='menu flex flex-col justify-evenly'>
          <li className='menu-item'><a href="#">Home</a></li>
          <li className='menu-item'><a href="#">About</a></li>
          <li className='menu-item'><a href="#">Projects</a></li>
          <li className='menu-item'><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className='buttons-container flex flex-row items-center bg-green-500'>
        <button type='button' className='hire-button'>
          Hire me
        </button>
        <button type='button' className='resume-button'>
          Resume
        </button>
        <button type='button' className='theme-button'>
          Theme
        </button>
        <button type='button' className='menu-button' onClick={toggleNavbar}>
          <Bars3Icon className='w-6 text-black' />
        </button>
      </div>
    </header>
  );
}

export default Navbar;