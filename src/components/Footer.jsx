import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaRegCopyright,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

const aboutUs = [
  {
    name: 'Tentang kami',
    url: '/about-us',
  },
  {
    name: 'Desclaimer',
    url: '/desclaimer',
  },
  {
    name: 'Kode etik',
    url: '/code-ethics',
  },
  {
    name: 'Term of Service',
    url: '/term-of-service',
  },
  {
    name: 'Privacy-policy',
    url: '/privacy-policy',
  },
  {
    name: 'Kontak Kami',
    url: '/contact',
  },
];
const mainChanels = [
  {
    name: 'Beranda',
    url: '/beranda',
  },
  {
    name: 'Bola',
    url: '/bola',
  },
  {
    name: 'Balap',
    url: '/racing',
  },
  {
    name: 'Ragam',
    url: '/ragam',
  },
  {
    name: 'Sportainment',
    url: '/sportainment',
  },
  {
    name: 'Hobi',
    url: '/hobby',
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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-[#24326f]">
        <div className="container mx-auto py-10 text-white">
          <div className="sm:grid sm:grid-cols-4 sm:gap-4">
            <div className="sm:col-span-2">
              <div className="w-[60%] sm:w-[50%] mb-4 sm:mb-10 mx-auto sm:mx-0">
                <img
                  src="/assets/images/logo-white.png"
                  alt="logo sportstars"
                  className="w-full object-contain"
                />
              </div>

              <div className="hidden sm:block">
                <h6 className="font-light mb-4">Connect with us:</h6>
                <div className="flex gap-3 items-center">
                  {socials.map((social, i) => (
                    <Link
                      to="#"
                      key={`footer-social-${i}`}
                      className="p-2 text-xl bg-white text-[#182366] hover:text-red-600 transition-all duration-300"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4 hidden sm:block">
                ABOUT US
              </h5>

              <div className="flex flex-col gap-3 mx-auto text-center sm:text-left">
                {aboutUs.map((item, i) => (
                  <Link
                    key={`${item.name}-${i}`}
                    className="text-sm font-normal hover:text-red-600 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full flex justify-center mt-4 sm:hidden">
              <div className="flex gap-3 items-center">
                {socials.map((social, i) => (
                  <Link
                    to="#"
                    key={`footer-social-${i}`}
                    className="p-2 text-xl bg-white text-[#182366] hover:text-red-600 transition-all duration-300"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden sm:block">
              <h5 className="font-bold text-lg mb-4">KANAL UTAMA</h5>

              <div className="grid grid-rows-6 grid-flow-col gap-3">
                {mainChanels.map((item, i) => (
                  <Link
                    key={`${item.name}-${i}`}
                    className="text-sm font-normal hover:text-red-600 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#070d59] py-6 text-white flex items-center justify-center">
        <div className="flex sm:items-center gap-2">
          <FaRegCopyright className="hidden sm:block" />
          <h5 className="text-center">
            Copyrights <span className="sm:hidden">&copy;</span> 2021.
            <br className="flex sm:hidden" /> Sportstars.id All rights reserved
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
