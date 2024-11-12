import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-left bg-cover"
      style={{
        backgroundImage: "url('maha.jpg')",
        backgroundSize: "20%",
        backgroundPosition: "left 100px top 100px" // Fixed camelCase
      }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)] flex items-center'> {/* Fixed height calculation */}
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[120px] font-bold leading-tight flex flex-col justify-center'> {/* Fixed responsive text size */}
          <p data-aos="zoom-in-down">I'm</p>
          <p data-aos="zoom-in-down">Syeda</p>
          <p data-aos="zoom-in-down">Mehdya</p>
          <p data-aos="zoom-in-down">Fatima</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
