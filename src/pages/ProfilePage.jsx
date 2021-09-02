import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import MainLayout from './MainLayout';
import ProfilePost from '../components/ProfilePost';
import { getUserProfileAPI } from '../api';
import useRequest from '../hooks/useRequest';

const ProfilePage = () => {
   const { _id } = useParams();

   const { data: user, error, isLoading } = useRequest(getUserProfileAPI, _id);

   // 9
   const [noPosts, setNoPosts] = useState(false);

   // const loadNoreHandler = (e) => {
   //    e.preventDefault();
   //    getPostsAPI({ skip, _id }).then((data) => {
   //       if (data.data.length < 15) {
   //          setNoPosts(true);
   //       }
   //       if (data.data.length === 0) return;

   //       dispatch(addPostsToProfile({ _id, posts: data.data }));
   //       setSkip(skip + 15);
   //    });
   // };

   if (error) return <Redirect to='/' />;

   return (
      <MainLayout>
         <div className='max-w-4xl w-full mx-auto px-4 my-4'>
            <div className='flex justify-center '>
               <div className='flex items-center flex-shrink-0'>
                  <img
                     src='https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
                     width='128'
                     height='128'
                     className='border-0 rounded-full mr-4'
                     alt=''
                  />
               </div>
               <div className='flex flex-col justify-between'>
                  <h2 className='text-3xl'>
                     {isLoading ? (
                        <div className='w-30 rounded bg-gray-100 h-9'></div>
                     ) : (
                        user.email
                     )}
                  </h2>
                  {!isLoading && (
                     <ul className='flex'>
                        <li className='text-lg mr-6'>
                           публикаций: {user.postsCount}
                        </li>
                        <li className='text-lg mr-6'>
                           подписчиков: {user.followersCount}
                        </li>
                        <li className='text-lg mr-6'>
                           подписок: {user.followingCount}
                        </li>
                     </ul>
                  )}
                  <p>Description</p>
               </div>
            </div>
            <ul className='flex flex-wrap h-full mt-4'>
               {isLoading
                  ? Array(9)
                       .fill()
                       .map((_, index) => (
                          <ProfilePost key={index} isLoading={isLoading} />
                       ))
                  : user.posts.map((post) => <ProfilePost {...post} />)}
            </ul>
            {!isLoading && !noPosts && (
               <button onClick={() => {}}>Load moreу</button>
            )}
         </div>
      </MainLayout>
   );
};

export default ProfilePage;
