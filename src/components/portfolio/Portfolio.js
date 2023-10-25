import './portfolio.css';
// import React, { useState, useEffect } from 'react';
import portfolioData from './portfolioData';

function Portfolio() {    
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/mayanklad/repos')
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json()
  //       }
  //       throw response;
  //     })
  //     .then(data => {
  //       console.log(data)
  //       setData(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data: ', error);
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     })
  // }, []);

  return (
    <div id='projects' className='portfolio-container px-2.5 md:px-[8.3%] py-6 w-full'>
      <h1 className='px-3.5 underline underline-offset-[12px]'>Projects</h1>
      <div className='content px-3.5 w-full flex flex-col items-center'>
        <div className='flex flex-row flex-wrap my-4'>
          {portfolioData.map((project, index) => {
            return (
              <a
                key={index}
                className='group not-prose relative w-full aspect-video mb-2.5'
                href={project.url}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className='absolute w-full h-full m-0 -z-20' 
                  src={project.imgUrl}
                  alt={project.name}
                ></img>
                <div className='absolute w-full h-full bg-[#5988ff] -z-10 opacity-70 md:opacity-0 md:group-hover:opacity-70 md:transition md:duration-500 md:ease-in'></div>
                <div className='flex flex-col p-5 w-full h-full items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition md:duration-500 md:ease-in'>
                  <div className='text-center text-white text-lg'>{project.name}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;