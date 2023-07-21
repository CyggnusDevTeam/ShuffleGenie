import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Nav from '../../Components/Nav';
import BackToTopButton from '../../Components/BackToTopButton';

function Layout() {
  return (
    <div className='bg-gray-1'>
      <Nav />
      <Outlet />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default Layout;
