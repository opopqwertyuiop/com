import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, Redirect } from 'react-router-dom';

import Button from '../components/Button';

import InputField from '../components/InputField';
import { loginAPI } from '../api/index';
import useInput from '../hooks/useInput';
import useErrorObject from '../hooks/useErrorObject';
import { setUser } from '../store/slices/authSlice';

const LoginPage = ({ match }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const email = useInput();
   const password = useInput();

   const location = useLocation();

   const dispatch = useDispatch();

   const isAuth = useSelector((state) => state.auth.isAuth);
   const params = new URLSearchParams(location.search);
   const registerSuccess = params.get('registerSuccess');

   const handleLogin = (e) => {
      e.preventDefault();

      if (error) setError(null);

      setIsLoading(true);
      loginAPI({
         email: email.value,
         password: password.value,
      })
         .then((data) => {
            console.log(data);
            localStorage.setItem('jwt', data.data.jwt);
            dispatch(setUser(data.data.user));
         })
         .catch((e) => {
            setError(e?.response?.data);
            setIsLoading(false);
         });
   };
   const errorObject = useErrorObject(error);

   if (isAuth) {
      return <Redirect to='/' />;
   }

   return (
      <div className='min-h-screen w-full flex items-center'>
         <form className='mx-auto w-full max-w-lg p-4 border' action=''>
            <h3 className='text-center text-xl'>Login</h3>
            {Boolean(registerSuccess) === true && (
               <p className='text-green-700 mx-auto text-center'>
                  You are registered and can login./
               </p>
            )}
            <InputField
               errorObject={errorObject}
               type='email'
               title='E-mail'
               placeholder={'example@gmail.com'}
               name={'email'}
               {...email}
            />
            <InputField
               errorObject={errorObject}
               title='Password'
               name={'password'}
               type='password'
               {...password}
            />
            <p>
               <Button
                  isLoading={isLoading}
                  onClick={handleLogin}
                  extraClasses='w-full'>
                  Login
               </Button>
            </p>
            <p className='mt-1'>
               Don;t have account?{' '}
               <Link className='underline' to='/register'>
                  {' '}
                  Register
               </Link>
            </p>
         </form>
      </div>
   );
};
export default LoginPage;
