import React, { memo } from 'react';
// value,
//    onChange,
//    placeholder,

//    type = 'text',
const InputField = ({ errorObject, name, title, ...rest }) => {
   console.log(name);
   return (
      <p>
         <span
            className={`text-lg mt-1 inline-block${
               errorObject?.[name] ? ' text-red-500' : ''
            }`}>
            {title}
         </span>
         <input
            className={`w-full border-b-2 p-1.5 text-base${
               errorObject?.[name] ? ' border-red-300' : ''
            }`}
            {...rest}
         />
         {errorObject?.[name] && (
            <span className='text-sm text-red-500'>{errorObject?.[name]}</span>
         )}
      </p>
   );
};

export default memo(InputField);
// ?
// ?.email
