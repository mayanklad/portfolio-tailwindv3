import './experience.css';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from 'assets/images/work.svg';
import { ReactComponent as SchoolIcon } from 'assets/images/school.svg';

import timelineElements from './timelineElements';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

function Experience() {  
  let workIconStyles = {background: '#FFFFFF'};
  let schoolIconStyles = {background: '#FFFFFF'};
  
  return (
    <div id='experience' className='experience-container px-2.5 py-6 w-full bg-[#c4d6e2]'>
      <h1 className='px-3.5'>Experience</h1>
      <div className='content px-3.5 w-full flex flex-col items-center'>
        <p className='w-full'>Computer science graduate looking to obtain the position of software developer. I want to work with an organization that can give me ample opportunities to grow so that i will be able to help in the growth of that organization and will be able to enhance my skills and my capabilities.</p>
        
        <VerticalTimeline>
          {timelineElements.slice().reverse().map((element, index) => {
            let isWorkIcon = element.icon === "work";

            return (
              <VerticalTimelineElement
                key={index}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p className="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>


      </div>
    </div>
  );
}

export default Experience;