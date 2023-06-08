import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const navMenus = [
  {
    name: 'Beranda',
    url: '/',
  },
  {
    name: 'Bola',
    url: '/bola',
  },
  {
    name: 'Balap',
    url: '/balap',
  },
  {
    name: 'Ragam',
    url: '/ragam',
  },
  {
    name: 'Sportaiment',
    url: '/sportaiment',
  },
  {
    name: 'Hobi',
    url: '/hobi',
  },
  {
    name: 'Data Statistik',
    url: '/data-statistik',
  },
  {
    name: 'Multimedia',
    url: '/multimedia',
  },
  {
    name: 'Index',
    url: '/index',
  },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setIsHovered(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={` bg-[#24326f] py-4 overflow-x-auto ${
        !isSticky
          ? 'sticky top-0 z-50 shadow-xl transition-all duration-300'
          : ''
      }`}
    >
      <div className="max-w-6xl px-4 sm:px-0 mx-auto flex justify-between items-center ">
        <div className="flex gap-4">
          {navMenus.map((nav, index) => (
            <NavLink
              key={`navMenu-${index}`}
              to={nav.url}
              className={({ isActive }) =>
                isActive
                  ? 'uppercase text-red-600 font-medium text-sm whitespace-nowrap'
                  : 'uppercase text-white font-medium text-sm whitespace-nowrap hover:text-red-600'
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </div>

        <div
          className="relative hidden sm:block p-2 rounded-md min-w-[40px] bg-red-600 text-white ml-5 sm:ml-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <label className="flex items-center">
            <input
              type="text"
              placeholder="Cari berita"
              className={`${
                isHovered ? 'w-full pr-7 ' : 'w-0'
              }  h-full bg-transparent outline-none transition-all duration-500 placeholder:text-white/70`}
              value={searchValue}
              onChange={handleInputChange}
            />
            <FaSearch className="absolute right-3 top-2" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
