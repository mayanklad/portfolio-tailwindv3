import './home.css';

function Home() {    
  return (
    // <div className='Home flex h-screen w-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
    //   {/* <div className='p-80 backdrop-blur-md bg-white/50 rounded'> */}
    //   <div className='p-80 rounded bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-200'>
    //   <div className='max-w-2xl text-4xl font-bold sm:text-6xl'>
    //     Mayank Lad
    //     {/* Building Better World One Syntax at a Time */}
    //   </div>
    //   </div>
    // </div>
    // <div className='h-screen flex items-center justify-center w-full bg-red-200'>
    //   <div>
    //     Mayank Lad
    //   </div>
    // </div>
    <div className='home-container h-full w-full flex flex-row bg-green-200'>
      <div className='m-2.5 w-full flex justify-center items-center bg-red-200'>
        <div className='headings-container w-fit h-fit mx-5'>
          <h3 className='w-fit text-base'>Hi, I'm</h3>
          <h1 className='w-fit text-4xl'>Mayank Lad</h1>
          <h2 className='w-fit text-xl'>Building Better World One Syntax at a Time</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;