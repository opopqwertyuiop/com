import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../store/slices/authSlice';
// Header
// ml-3
// ml-3
// ml-3
// {
// }
// users.?[]
// //
const Header = () => {
   const isAuth = useSelector((state) => state.auth.isAuth);
   const userId = useSelector((state) => state.auth.user?._id);

   const dispatch = useDispatch();

   const logoutHandler = () => {
      localStorage.removeItem('jwt');
      dispatch(logout());
   };

   return (
      <header className='bg-black text-white flex px-4 items-center'>
         <h1 className='text-xl font-bold'>
            <Link to='/'>opopqwertyuiop</Link>
         </h1>

         <ul className='ml-auto flex'>
            <li className=' hover:underline'>
               <NavLink
                  to='/'
                  exact
                  className='p-3 inline-block'
                  activeClassName='font-bold'>
                  Home
               </NavLink>
            </li>
            {/* Nav
            <Link to='/create' activeClassName='font-bold'>
                        Create
                     </Link>
            Nav */}
            {/* Create */}
            {/* create */}
            {/* `` */}
            {/* ' */}
            {/* ' */}
            {isAuth ? (
               <>
                  <li className=' hover:underline'>
                     <NavLink
                        exact
                        to={`/profile/${userId}`}
                        className='p-3 inline-block'
                        activeClassName='font-bold'>
                        Profile
                     </NavLink>
                  </li>
                  <li className=' hover:underline'>
                     <NavLink
                        exact
                        to='/create'
                        className='p-3 inline-block'
                        activeClassName='font-bold'>
                        Create
                     </NavLink>
                  </li>
                  <li className=''>
                     <button
                        className='w-full h-full inline-block p-3 hover:underline'
                        onClick={logoutHandler}>
                        Logout
                     </button>
                  </li>
               </>
            ) : (
               <>
                  <li className=' hover:underline'>
                     <NavLink
                        to='/login'
                        exact
                        className='p-3 inline-block'
                        activeClassName='font-bold'>
                        Login
                     </NavLink>
                  </li>
                  <li className=' hover:underline'>
                     <NavLink
                        to='/register'
                        exact
                        className='p-3 inline-block'
                        activeClassName='font-bold'>
                        Register
                     </NavLink>
                  </li>
               </>
            )}
         </ul>
      </header>
   );
};
// login
// Login
export default Header;
