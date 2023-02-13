import './skill.css';
import skillIconPlaceholder from 'assets/images/skill-icon-placeholder.svg'

function Skill() {    
  let skills = ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'Java', 'Spring', 'REST', 'Microservice', 'Python', 'Visualization', 'Machine Learning', 'Git', 'GitHub', 'SQL'];

  return (
    <div className='skill-container px-2.5 py-6 w-full'>
      <h1 className='px-3.5'>Skills</h1>
      <div className='content px-3.5 w-full flex flex-col items-center'>
        <div className='flex flex-row flex-wrap'>
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className='flex flex-col w-6/12 h-36 items-center mb-2.5'
              >
                <img className='h-16 mt-0 mb-5' src={skillIconPlaceholder} alt='Skill' />
                <div className='grow'>{skill}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skill;