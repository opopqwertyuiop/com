import { useMemo } from 'react';

const useErrorObject = (error) => {
   const errorObject = useMemo(
      () =>
         error
            ? error.reduce((prev, err) => {
                 prev[err.param] = err.msg;
                 return prev;
              }, {})
            : null,
      [error]
   );

   return errorObject;
};

export default useErrorObject;
// i
