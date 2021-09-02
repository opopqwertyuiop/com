import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainLayout from './MainLayout';

const IndexPage = () => {
   const isAuth = useSelector((state) => state.auth.isAuth);

   return (
      <MainLayout>
         <Link to='/profile/60dfbf6b463da7427026345f'>1</Link>
         <Link to='/profile/60e79ef911a16425441e4ae1'>2</Link>
         <Link to='/profile/60e8f456a41647305881e2e4'>3</Link>
      </MainLayout>
   );
};

export default IndexPage;
