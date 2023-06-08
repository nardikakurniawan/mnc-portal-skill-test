import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

const navItems = [
  {
    name: 'RCTI+',
    url: '#',
  },
  {
    name: 'Vision+',
    url: '#',
  },
  {
    name: 'Okezone.com',
    url: '#',
  },
  {
    name: 'SINDOnews.com',
    url: '#',
  },
  {
    name: 'INews.id',
    url: '#',
  },
  {
    name: 'Buddyku',
    url: '#',
  },
];
const socials = [
  {
    name: 'facebook',
    icon: <FaFacebookF />,
  },
  {
    name: 'twitter',
    icon: <FaTwitter />,
  },
  {
    name: 'instagram',
    icon: <FaInstagram />,
  },
  {
    name: 'youtube',
    icon: <FaYoutube />,
  },
  {
    name: 'tiktok',
    icon: <FaTiktok />,
  },
];

const NavbarTop = () => {
  return (
    <nav className="max-w-6xl mx-auto py-4 hidden sm:flex justify-between  ">
      <div className="flex gap-3">
        {navItems.map((nav, index) => (
          <Link
            key={`nav-top-${index}`}
            to={nav.url}
            className="font-medium text-xs"
          >
            {nav.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-5">
        {socials.map((social) => (
          <Link
            key={social.name}
            className="text-[#070d59] hover:text-blue-600"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavbarTop;
