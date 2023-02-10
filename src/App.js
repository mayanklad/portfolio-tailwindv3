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
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  return (
    <div className="App h-screen overflow-y-auto prose">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Interest />
      <Skill />
      <Certificate />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
