import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Interest from './components/interest/Interest';
import Skill from './components/skill/Skill';
import Certificate from './components/certificate/Certificate';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   document.documentElement.classList.add('dark');
  // } else {
  //   document.documentElement.classList.remove('dark');
  // }
  
  return (
    <div className="App h-[100dvh] overflow-y-auto prose-sm max-w-none">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Interest />
      <Skill />
      <Certificate />
      <Portfolio />
      <Contact />
      <footer className='footer-container px-2.5 pb-6 w-full bg-[#c4d6e2] text-center text-xs'>Made with ❤️ by Mayank Lad | © 2023. All Rights Reserved.</footer>
    </div>
  );
}

export default App;