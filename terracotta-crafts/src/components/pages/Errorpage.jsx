import React from 'react';
import { NavLink } from 'react-router-dom'; // Optional, for navigation with React Router

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-600 max-w-md mb-6">
        Oops! It looks like you’ve hit a dead end. The page you’re looking for doesn’t exist or has been moved.
      </p>
      <NavLink
        to="/"
        className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default Errorpage;
