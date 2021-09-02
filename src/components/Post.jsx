import React from 'react';

import heart from '../images/heart (1).svg';

const Post = ({ image, author, isLoading }) => {
   return (
      <div className='max-w-4xl w-full mx-auto px-4 my-4 flex justify-center'>
         <div className='flex items-center bg-black'>
            <img src={image} alt='' />
         </div>
         <div
            style={{ minHeight: '300px' }}
            className='flex-shrink-0 w-64 bg-white min-h-32'>
            <header className='p-4 flex items-center border-b'>
               <img
                  className='rounded-full mr-3'
                  src='https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
                  alt=''
                  width='32'
                  height='32'
               />
               <span className='text-sm'>{author?.email}</span>
            </header>
            <ul className='p-4'>
               <li>
                  <img
                     className='rounded-full'
                     src='https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
                     alt=''
                     width='32'
                     height='32'
                  />
                  <div>
                     <span className='text-sm font-medium'>dumacuk228</span>
                  </div>
                  <img
                     src={heart}
                     style={{ fill: 'red' }}
                     className=''
                     width='16'
                     height='16'
                     fill='#000'
                     alt=''
                  />
               </li>
            </ul>
         </div>
      </div>
   );
};
// w-72
//  72
// style={{ flexBasis: '300px' }}
// 4
export default Post;
