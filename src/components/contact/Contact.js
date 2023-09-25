import './contact.css';
import emailIcon from 'assets/images/email-icon.svg'
import linkedInIcon from 'assets/images/linkedin-icon.svg'
import githubIcon from 'assets/images/github-icon.svg'
import instagramIcon from 'assets/images/instagram-icon.svg'

function Contact() {  
  return (
    <div id='contact' className='contact-container px-2.5 py-6 w-full bg-[#c4d6e2]'>
      <h1 className='px-3.5 underline underline-offset-[12px]'>Contact</h1>
      <div className='content px-3.5 w-full flex flex-col items-center'>
        <p className='w-full'>
          I would love to hear from you! Whether you have a project idea, a question, or just want to chat, feel free to reach out.
        </p>
        <div className='flex flex-row flex-wrap w-full justify-evenly items-center'>
          <a title='Email' className='flex items-center h-10 w-10 mb-3.5' href='mailto:mayanklad12@gmail.com' target='_blank' rel='noreferrer'>
            <img className='m-0' src={emailIcon} alt='Email' />
          </a>
          <a title='LinkedIn' className='flex items-center h-10 w-10 mb-3.5' href='https://www.linkedin.com/in/mayank-lad-602568151/' target='_blank' rel='noreferrer'>
            <img className='m-0' src={linkedInIcon} alt='LinkedIn' />
          </a>
          <a title='Github' className='flex items-center h-10 w-10 mb-3.5' href='https://github.com/mayanklad' target='_blank' rel='noreferrer'>
            <img className='m-0' src={githubIcon} alt='Github' />
          </a>
          <a title='Instagram' className=' flex items-center h-10 w-10 mb-3.5' href='https://www.instagram.com/mayank__lad/' target='_blank' rel='noreferrer'>
            <img className='m-0' src={instagramIcon} alt='Instagram' />
          </a>
        </div>
      </div>
    </div>
  );
}
  
export default Contact;