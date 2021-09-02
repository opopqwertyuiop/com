import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainLayout from './MainLayout';
import InputField from '../components/InputField';
import Button from '../components/Button';
import useInput from '../hooks/useInput';
import useErrorObject from '../hooks/useErrorObject';
import { createPostAPI } from '../api/';

const CreatePage = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const isAuth = useSelector((state) => state.auth.isAuth);

   const title = useInput();
   const image = useInput();

   const errorObject = useErrorObject(error);

   const history = useHistory();

   if (!isAuth) return <Redirect to='/login' />;

   const createHandler = (e) => {
      e.preventDefault();

      setIsLoading(true);
      console.log(image.value);
      createPostAPI({ title: title.value, image: image.value })
         .then(() => {
            history.push('/');
         })
         .catch((e) => {
            setError(e?.response?.data);
            setIsLoading(false);
         });
   };

   return (
      <MainLayout>
         <div className='flex items-center justify-center h-full w-full'>
            <form action='' className='mx-auto w-full max-w-lg p-4 border'>
               <h3 className='text-center text-xl'>Create Post</h3>
               <InputField
                  errorObject={errorObject}
                  title='Title'
                  name='title'
                  {...title}
               />
               <InputField
                  errorObject={errorObject}
                  title='Image url'
                  name='image'
                  {...image}
               />
               <p>
                  <Button
                     isLoading={isLoading}
                     onClick={createHandler}
                     extraClasses={'w-full'}>
                     Create
                  </Button>
               </p>
            </form>
         </div>
      </MainLayout>
   );
};

export default CreatePage;
