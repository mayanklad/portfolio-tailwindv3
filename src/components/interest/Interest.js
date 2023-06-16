import './interest.css';

function Interest() {  
  let interests = [
    'NLP',
    'Machine Learning',
    'Collaboration',
    'Microservice'
  ];

  return (
    <div id='interests' className="interest-container px-2.5 py-6 w-full">
      <h1 className='px-3.5'>Areas of Interest</h1>
      <div className='content px-3.5 w-full flex flex-col items-center'>
        <div className='flex flex-col items-center'>
          {interests.map((interest, index) => {
            return (
              <div key={index}>{interest}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Interest;