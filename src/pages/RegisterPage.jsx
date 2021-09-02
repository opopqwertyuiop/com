import React, { useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../components/Button';
import InputField from '../components/InputField';
import useErrorObject from '../hooks/useErrorObject';

import { registerAPI } from '../api/index';
import useInput from '../hooks/useInput';

const RegisterPage = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const email = useInput();
   const password = useInput();
   const passwordConfirmation = useInput();

   const history = useHistory();

   const isAuth = useSelector((state) => state.auth.isAuth);

   const handleRegister = (e) => {
      e.preventDefault();

      if (error) setError(null);

      setIsLoading(true);
      registerAPI({
         email: email.value,
         password: password.value,
         passwordConfirmation: passwordConfirmation.value,
      })
         .then(() => {
            history.push('/login?registerSuccess=true');
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
            <h3 className='text-center text-xl'>Register</h3>
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
            <InputField
               errorObject={errorObject}
               title='Password confirmation'
               name={'passwordConfirmation'}
               type='password'
               {...passwordConfirmation}
            />
            <p>
               <Button
                  isLoading={isLoading}
                  onClick={handleRegister}
                  extraClasses='w-full'>
                  Register
               </Button>
            </p>
            <p className='mt-1'>
               Don;t have account?{' '}
               <Link className='underline' to='/login'>
                  {' '}
                  Login
               </Link>
            </p>
         </form>
      </div>
   );
};

export default RegisterPage;
