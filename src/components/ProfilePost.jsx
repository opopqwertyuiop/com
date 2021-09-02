import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import heart from '../images/heart (1).svg';
import comment from '../images/speech-bubble.svg';

// d
// /
const ProfilePost = ({ isLoading = false, image, _id }) => {
   const location = useLocation();
   return (
      <li className='w-1/3 md:w-1/2 relative'>
         <div style={{ paddingTop: '100%' }} className='h-0'></div>
         {isLoading ? (
            <div className=' animate-pulse rounded absolute top-0 right-0 left-0 bottom-0 bg-gray-100 m-4'></div>
         ) : (
            <>
               <Link
                  to={{
                     pathname: `/posts/${_id}`,
                     state: { background: location },
                  }}
                  style={{ backgroundImage: `url('${image}')` }}
                  className='bg-cover bg-center bg-no-repeat absolute top-0 right-0 left-0 bottom-0 m-1'>
                  <div className='bg-black w-full h-full bg-opacity-20 opacity-0 flex hover:opacity-100 items-center justify-center'>
                     <ul className='flex'>
                        <li className='flex'>
                           <img src={heart} width='20' height='20' alt='' />{' '}
                           <span className='text-white text-xl ml-1 font-bold'>
                              1
                           </span>
                        </li>
                        <li className='flex ml-6'>
                           <img src={comment} width='20' height='20' alt='' />{' '}
                           <span className='text-white text-xl ml-1 font-bold'>
                              1
                           </span>
                        </li>
                     </ul>
                  </div>
               </Link>
            </>
         )}
      </li>
   );
};

export default ProfilePost;
