import React from 'react';
import {
  Content,
  Footer,
  HeaderLogo,
  Navbar,
  NavbarTop,
  ScheduleResult,
  Thumbnail,
} from '../components';

const Home = () => {
  return (
    <>
      <div className="border-b border-blue-700">
        <NavbarTop />
      </div>

      <HeaderLogo />
      <Navbar />
      <ScheduleResult />
      <Thumbnail />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
