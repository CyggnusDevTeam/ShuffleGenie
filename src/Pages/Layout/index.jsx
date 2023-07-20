import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Nav from '../../Components/Nav';

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
