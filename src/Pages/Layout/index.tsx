import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import BackToTopButton from '../../Components/BackToTopButton';

const Layout: React.FC = () => (
  <div className='bg-gray-1'>
    <NavBar />
    <Outlet />
    <BackToTopButton />
    <Footer />
  </div>
);

export default Layout;
