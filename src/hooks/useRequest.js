import { useState, useEffect } from 'react';

const useRequest = (API, config) => {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   // \
   useEffect(() => {
      let isMounted = true;

      API(config)
         .then((data) => {
            if (isMounted) {
               setData(data.data);
               setIsLoading(false);
            }
         })
         .catch((error) => {
            if (isMounted) {
               setError(error);
               setIsLoading(false);
            }
         });
      return () => (isMounted = false);
   }, [API, config]);

   return { data, error, isLoading };
};

export default useRequest;
