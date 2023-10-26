import './interest.css';

function Interest() {  
  let interests = [
    'NLP',
    'Machine Learning',
    'Collaboration',
    'Microservice'
  ];

  return (
    <div id='interests' className="interest-container px-2.5 md:px-[8.3%] xl:px-[16.6%] py-6 w-full">
      <h1 className='px-3.5 underline underline-offset-[12px]'>Areas of Interest</h1>
      <div className='content px-3.5 w-full flex flex-col items-center'>
        <div className='flex flex-col items-center my-4'>
          {interests.map((interest, index) => {
            return (
              <div key={index} className='my-4'>{interest}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Interest;