import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Help from '../Pages/Help';
import Profile from '../Pages/Profile';
import Layout from '../Pages/Layout';
import NoPage from '../Pages/NoPage';
import AppProvider from '../Context/Provider';
import SyncForm from '../Components/SyncForm';
import Home from '../Pages/Home';
import About from '../Pages/About';

const createRoutes = (): React.JSX.Element => (
  <AppProvider>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='sync' element={<SyncForm />} />
          <Route path='help' element={<Help />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </AppProvider>
);

export default createRoutes;
