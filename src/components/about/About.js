import './about.css';
import aboutMeImage from 'assets/images/about-me.jpg';

function About() {  
  return (
    <div id='about' className="about-container px-2.5 py-6 w-full">
      <h1 className='px-3.5 underline underline-offset-[12px]'>About Me</h1>
      <div className='content px-3.5 w-full flex flex-col items-center'>
        <p className='w-full'>Hey, I'm Mayank Ashokkumar Lad, a Toronto-based Full Stack Engineer passionate about Artificial Intelligence and Machine Learning. With roots in Computer Engineering from Savitribai Phule Pune University, I've made significant strides at Accenture, mastering Python, Java, and Oracle Cloud.</p>
        <p className='w-full'>Currently on Lambton College's Dean's Honor List, I'm on a mission to bridge the gap between tech and real-world impact. From crafting machine learning models to optimizing microservices, I thrive on turning challenges into innovation.</p>
        <p className='w-full'>Explore my digital space for a snapshot of my journey. Let's connect for tech talks or potential collaborations - I'm always up for the next coding adventure!</p>
        <img className='aspect-[3/4] w-6/12' src={aboutMeImage} alt='Myself' />
      </div>
    </div>
  );
}
  
export default About;