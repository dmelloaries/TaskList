import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-400 text-white">
      <h1 className="text-5xl font-bold mb-4 animate-pulse">
        Welcome to Dmello Todo's Application
      </h1>
      <p className="text-xl mb-6">
        Organize your tasks with simplicity and style!
      </p>
      <Link to="/todos">
        <button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
          Get Started
        </button>
      </Link>
      <footer className="absolute bottom-4 text-sm text-gray-200">
        Created by Aries Dmello TE IT A 21
      </footer>
    </div>
  );
};

export default LandingPage;
