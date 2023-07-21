import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Nav from '../../Components/Nav';
import BackToTopButton from '../../Components/BackToTopButton';

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default Layout;
