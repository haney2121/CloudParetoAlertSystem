import { useEffect, useRef } from 'react';

const useTimeout = (callback: () => void, timeLimit: number) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    const id = setTimeout(() => savedCallback.current(), timeLimit);

    return () => clearTimeout(id);
  }, [timeLimit]);
};

export default useTimeout;
