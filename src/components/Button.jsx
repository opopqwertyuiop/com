import React from 'react';

import Loader from './Loader';

const Button = ({ isLoading = false, children, extraClasses, ...rest }) => {
   return (
      <button
         disabled={isLoading}
         className={`border border-black p-2 text-xl bg-black text-white mt-2 transition-colors duration-300 hover:bg-white hover:text-black${
            isLoading ? ' cursor-default bg-white' : ''
         }${!extraClasses ? '' : ` ${extraClasses}`}`}
         {...rest}>
         {isLoading ? <Loader extraClasses='mx-auto' /> : children}
      </button>
   );
};

export default Button;
