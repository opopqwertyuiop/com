import React from 'react';

const Loader = ({ extraClasses, ...rest }) => {
   return (
      <div
         {...rest}
         style={{ borderTopColor: '#000000' }}
         className={`border-4 w-8 h-8 border-transparent rounded-full animate-spin${
            !extraClasses ? '' : ` ${extraClasses}`
         }`}></div>
   );
};

export default Loader;
// i
// props
