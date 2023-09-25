import './home.css';
import homeBackground from 'assets/images/home-background.jpg';

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
    <div id='home' className='home-container h-full w-full flex flex-row'>
      <div
        className='m-2.5 w-full flex justify-center items-center bg-stretch bg-no-repeat bg-center'
        style={{
          backgroundImage: `url(${homeBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left'
        }}
      >
        <div className='headings-container w-fit h-fit mx-5 bg-[#f0f8ffcc] px-5'>
          <h3 className='w-fit'>Hi, I'm</h3>
          <h1 className='w-fit'>Mayank Lad</h1>
          <h2 className='w-fit'>Building Better World One Syntax at a Time</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;