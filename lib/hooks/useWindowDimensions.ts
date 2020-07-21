import { useState, useEffect } from 'react';

export interface WindowDimensions {
  width: number;
  height: number;
}

const getWindowDimensions = (): WindowDimensions => {
  if (typeof window === 'undefined') return { width: undefined, height: undefined };
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
