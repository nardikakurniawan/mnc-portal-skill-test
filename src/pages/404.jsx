import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-gray-400 flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-200">404 | NOT FOUND</h1>
        <Link
          to="/"
          className=" py-2 bg-gray-500 text-white rounded-md text-center hover:bg-gray-600 transition-all duration-300"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
