import './skill.css';
import skillData from './skillData';

function Skill() {
  return (
    <div id='skills' className='skill-container px-2.5 py-6 w-full bg-[#c4d6e2]'>
      <h1 className='px-3.5 underline underline-offset-[12px]'>Skills</h1>
      <div className='content px-3.5 w-full flex flex-col items-center'>
        <div className='flex flex-row flex-wrap my-4'>
          {skillData.map((skill, index) => {
            return (
              <div
                key={index}
                className='flex flex-col w-6/12 h-36 items-center mb-2.5'
              >
                <img className='h-16 mt-0 mb-5' src={skill.iconURL} alt='Skill' />
                <div className='grow'>{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skill;
