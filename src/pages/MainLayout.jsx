import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
   return (
      <div className='w-full h-screen flex flex-col'>
         <Header />
         <main className='flex-grow'>{children}</main>
         <Footer />
      </div>
   );
};

export default MainLayout;
