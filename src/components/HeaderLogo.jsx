import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';

const HeaderLogo = () => {
  return (
    <div className="max-w-6xl mx-auto py-6 flex justify-around sm:justify-between items-center">
      <div className="flex sm:hidden text-2xl">
        <FaBars />
      </div>

      <div className="w-[60%] sm:w-[28%]">
        <img
          src="/src/assets/images/logo.png"
          alt="logo sportstars"
          className="w-full object-contain"
        />
      </div>

      <div className="flex sm:hidden text-2xl">
        <FaSearch />
      </div>

      <div className="w-[60%] hidden sm:flex">
        <img
          src="/src/assets/images/iklan-1.JPG"
          alt="iklan"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default HeaderLogo;
