import './about.css';
import aboutMeImage from 'assets/images/about-me.jpg';

function About() {  
  return (
    <div id='about' className="about-container px-2.5 py-6 w-full">
      <h1 className='px-3.5 underline underline-offset-[12px]'>About Me</h1>
      <div className='content px-3.5 w-full flex flex-col items-center'>
        <p className='w-full'>Computer science graduate looking to obtain the position of software developer. I want to work with an organization that can give me ample opportunities to grow so that i will be able to help in the growth of that organization and will be able to enhance my skills and my capabilities.</p>
        <img className='aspect-[3/4] w-6/12' src={aboutMeImage} alt='Myself' />
      </div>
    </div>
  );
}
  
export default About;