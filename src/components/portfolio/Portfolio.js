import './portfolio.css';
import React, { useState, useEffect } from 'react';

function Portfolio() {    
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/mayanklad/repos')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
        console.log(data)
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <div id='projects' className='portfolio-container px-2.5 py-6 w-full'>
      <h1 className='px-3.5'>Projects</h1>
      <div className='content px-3.5 w-full flex flex-col items-center'>
        <div className='flex flex-row flex-wrap'>
          {data.map((project) => {
            return (
              <div
                key={project.id}
                className='group relative w-full aspect-video mb-2.5'
              >
                <img
                  className='absolute w-full h-full m-0 -z-20' 
                  src='https://naledi.co.uk/wp-content/uploads/2022/07/10-768x392.png'
                ></img>
                <div className='absolute w-full h-full bg-[#5988ff] opacity-0 -z-10 group-hover:opacity-80 transition duration-500 ease-in'></div>
                <div className='flex flex-col p-5 w-full h-full items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in'>
                  <div>{project.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;