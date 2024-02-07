import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

interface SizeProps {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize(): SizeProps {
  const [windowSize, setWindowSize] = useState<SizeProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 1000);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
