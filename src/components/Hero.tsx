import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Protect What Matters Most</h1>
        <p className="text-xl mb-8">Get affordable insurance coverage tailored to your needs</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Hero;