import React from 'react';
import Navbar from './navbar';
import Head from 'next/head';
import Footer from './footer';
import { MobileNav } from './mobilenav/mobileNav';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <MobileNav />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
