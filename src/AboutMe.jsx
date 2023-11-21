import React from 'react';
import Me from './assets/me.jpeg';

const AboutMe = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-center mb-6">
        <img
          src={Me}
          alt="Your Name"
          className="h-40 w-32 object-cover object-center border-4 border-black-500/75 "
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">David Duran</h2>
        <p className="text-gray-600">
          Full Stack Developer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;