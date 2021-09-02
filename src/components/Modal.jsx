import React from 'react';

const Modal = ({ children, onOutsideClick }) => {
   return (
      <div
         onClick={onOutsideClick}
         className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center'>
         {children}
      </div>
   );
};

export default Modal;
